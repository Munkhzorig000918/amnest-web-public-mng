import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { eventsService } from "@/services/apiService";
import EventModal from "./EventModal";

export default function EventsMobile() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // June 2025 to match test event
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const monthNames = [
    "ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠬᠣᠶᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠳᠥᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠳᠣᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠶᠡᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ",
    "ᠠᠷᠪᠠᠨ ᠬᠣᠶᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ",
  ];

  const daysOfWeek = [
    "ᠨᠠᠷᠠᠨ",
    "ᠰᠠᠷᠠᠨ",
    "ᠠᠩᠭᠠᠷᠠᠭ",
    "ᠯᠬᠠᠭᠠᠨ",
    "ᠫᠦᠷᠡᠪ",
    "ᠪᠠᠰᠠᠩ",
    "ᠪᠢᠮᠪᠠ",
  ];

  // Convert Arabic numerals to Mongolian Bichig numerals
  const toMongolianNumerals = (num) => {
    try {
      const mongolianDigits = [
        "᠐",
        "᠑",
        "᠒",
        "᠓",
        "᠔",
        "᠕",
        "᠖",
        "᠗",
        "᠘",
        "᠙",
      ];
      const result = num
        .toString()
        .split("")
        .map((digit) => mongolianDigits[parseInt(digit)])
        .join("");
      return result || num.toString(); // Fallback to regular numbers if conversion fails
    } catch (error) {
      return num.toString(); // Fallback to regular numbers
    }
  };

  // Fetch events data for the current month
  const fetchEventsData = async (year, month) => {
    setLoading(true);
    setError(null);

    try {
      // Use the direct events API endpoint
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);

      const params = {
        "filters[start_date][$gte]": startDate.toISOString().split("T")[0],
        "filters[start_date][$lte]": endDate.toISOString().split("T")[0],
        sort: "start_date:asc",
        populate: "*",
        locale: "mn",
      };

      const response = await eventsService.getEvents(params);

      if (response && (response.data || Array.isArray(response))) {
        const eventData = response.data || response;
        processEventsData(eventData);
      } else {
        // No events found for this month
        setEvents({});
      }
    } catch (err) {
      setError(err.message);
      // Clear events on error
      setEvents({});
    } finally {
      setLoading(false);
    }
  };

  // Process API response data into calendar format
  const processEventsData = (eventData) => {
    const eventsMap = {};

    eventData.forEach((event, index) => {
      // Handle both possible event structures
      const eventAttrs = event.attributes || event;

      const startDate = new Date(eventAttrs.start_date);
      const endDate = new Date(eventAttrs.end_date);
      const dateKey = startDate.toISOString().split("T")[0];

      // For events in 2025, use a reference date in 2025 for comparison
      const currentDate = new Date();
      const referenceDate =
        currentDate.getFullYear() < 2025 ? new Date(2025, 0, 1) : currentDate;
      const isPastEvent = endDate < referenceDate;

      // Color coding based on event type and status
      let eventColor = "bg-[#D9D9D9]"; // Default/past events
      if (!isPastEvent) {
        if (eventAttrs.members_only) {
          eventColor = "bg-[#FB00FF]"; // Members only - purple
        } else {
          eventColor = "bg-[#FFFF00]"; // Public events - yellow
        }
      }


      const eventObj = {
        id: event.id,
        title: eventAttrs.title,
        color: eventColor,
        type: eventAttrs.event_type || "ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ",
        startTime: formatTime(eventAttrs.start_date),
        endTime: formatTime(eventAttrs.end_date),
        description: eventAttrs.body || "",
        location: eventAttrs.address || "",
        membersOnly: eventAttrs.members_only || false,
        isPast: isPastEvent,
        startDate: eventAttrs.start_date,
        endDate: eventAttrs.end_date,
      };

      // Handle multiple events on the same date
      if (eventsMap[dateKey]) {
        // For now, keep the first event (could be enhanced to show multiple)
      } else {
        eventsMap[dateKey] = eventObj;
      }

      // Also add events for multi-day events (if end date is different)
      if (startDate.toDateString() !== endDate.toDateString()) {
        const currentDateIter = new Date(startDate);
        currentDateIter.setDate(currentDateIter.getDate() + 1);

        while (currentDateIter <= endDate) {
          const multiDayKey = currentDateIter.toISOString().split("T")[0];
          if (!eventsMap[multiDayKey]) {
            eventsMap[multiDayKey] = {
              ...eventObj,
              title: `${eventObj.title} (continued)`,
            };
          }
          currentDateIter.setDate(currentDateIter.getDate() + 1);
        }
      }
    });

    setEvents(eventsMap);
  };

  // Format time from ISO string
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  // Fetch events when component mounts or date changes
  useEffect(() => {
    fetchEventsData(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate]);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getPrevMonthDays = (date) => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 0);
    return prevMonth.getDate();
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  const handleDayClick = (dateString) => {
    const event = events[dateString];
    if (event) {
      setSelectedEvent({ ...event, date: dateString });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const formatDateToMongolian = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${toMongolianNumerals(year)} ᠣᠨ ${toMongolianNumerals(
      parseInt(month)
    )} ᠰᠠᠷ᠎ᠠ ${toMongolianNumerals(parseInt(day))} ᠦᠳᠦᠷ`;
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const prevMonthDays = getPrevMonthDays(currentDate);
    const days = [];

    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      const dayIndex = firstDay - 1 - i;
      const isLastInRow = (dayIndex + 1) % 7 === 0;
      days.push(
        <div
          key={`prev-${day}`}
          className={`border-b border-r border-gray-200 p-2 text-gray-400 text-[8px] cursor-pointer hover:bg-gray-50 flex flex-col h-full min-h-[40px] w-full min-w-[40px]`}
        >
          {toMongolianNumerals(day)}
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1
      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const event = events[dateString];
      const dayIndex = firstDay + day - 1;
      const isLastInRow = dayIndex % 7 === 0;

      days.push(
        <div
          key={day}
          className={`border-b border-r border-gray-200 p-2 text-[8px] cursor-pointer hover:bg-gray-50 relative h-full min-h-[40px] w-full min-w-[40px] ${
            event ? "hover:bg-blue-50" : ""
          }`}
          onClick={() => handleDayClick(dateString)}
        >
          <span className="absolute top-1 left-1 font-medium">
            {toMongolianNumerals(day)}
          </span>
          {event && (
            <div className="group relative">
              <div
                className={`relative top-4 left-6 ${event.color} w-3 h-3 rounded cursor-pointer`}
              ></div>
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-1 px-2 py-1 bg-black text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap max-w-[120px]">
                <div
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {event.title}
                </div>
                <div className="absolute top-full right-1 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black"></div>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Next month's leading days to fill the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    for (let day = 1; days.length < totalCells; day++) {
      const dayIndex = days.length;
      const isLastInRow = (dayIndex + 1) % 7 === 0;
      days.push(
        <div
          key={`next-${day}`}
          className={`border-b border-r border-gray-200 p-2 text-gray-400 text-[8px] cursor-pointer hover:bg-gray-50 flex flex-col h-full min-h-[40px] w-full min-w-[40px]`}
        >
          {toMongolianNumerals(day)}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="h-full w-full sm:hidden p-4 flex flex-col gap-7">
      <div className="h-full flex gap-10">
        <div className="h-full flex gap-4 max-h-[180px]">
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠪᠢᠳᠡ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤ᠂ ᠡᠷᢈᠡ ᠴᠢᠯᠦᢉᠡ᠂ ᠦᠨᠡᠨ᠂ ᠪᠣᠯᠤᠨ ᠨᠡᠷ᠎ᠡ ᠲᠥᠷᠦ ᠨᠢ
            ᠦᢉᠡᠶᠢᠰᢈᠡᢉᠳᠡᢉᠰᠡᠨ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠶ᠋ᠢᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠪᠠᠷ
            ᠨᠢᢉᠡᠳᠦᢉᠰᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠳᠠᠶᠠᠩ ᠳᠡᠯᠡᢈᠡᠢ ᠶ᠋ᠢᠨ
            ᢈᠥᠳᠡᠯᢉᠡᢉᠡᠨ᠃
          </h2>
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠪᠣᠯ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ ᠨᠢᢉᠡᠳᠦᠯ᠃ ᠣᠯᠠᠨ ᢈᠦᠮᠦᠰ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠡ
            ᠳᠤᠤᠭᠠᠷᠳᠠᠭ ᠤᠴᠢᠷ ᠠ᠋ᠴᠠ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠭᠠᠶᠢᠬᠠᠯᠲᠠᠢ ᠠᠮᠵᠢᠯᠲᠠ ᠳ᠋ᠤ
            ᢈᠦᠷᠴᠦ ᠴᠢᠳᠠᠭᠰᠠᠨ ᠶᠤᠮ᠃
          </h2>
          <h2
            className="text-xs font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠲᠠᠨ ᠤ᠋ ᠣᠷᠤᠯᠴᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢᠲᠠᠢ ᠤᠯᠠᠮᠵᠢᠯᠠᠯᠲᠤ᠂ ᠵᠢᠯ ᠪᠣᠯᠭᠠᠨ ᠵᠣᢈᠢᠶᠠᠨ
            ᠪᠠᠶᠢᠭᠤᠯᠳᠠᠭ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠨᠦ᠋ᢉᠦᠳ᠃
          </h2>
        </div>
      </div>

      {/* Right side - Calendar Grid */}
      <div className="flex-1 bg-white flex flex-col gap-4 h-full">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateMonth(-1)}
              disabled={loading}
              className="hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateMonth(1)}
              disabled={loading}
              className="hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={navigateToToday}
              disabled={loading}
              className="px-2 py-1 hover:bg-gray-100 text-[10px] border rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p>ᠥᠨᠥᠳᠦᠷ</p>
            </button>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-xs font-bold">
              {monthNames[currentDate.getMonth()]}{" "}
              {toMongolianNumerals(currentDate.getFullYear())}
            </h2>
            {loading && (
              <div className="flex items-center text-gray-500">
                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-600 mr-1"></div>
                <span className="text-[10px]">ᠠᠴᠢᠯᠠᠭᠤᠯᠵᠤ...</span>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-[10px] text-center">
                ᠠᠯᠳᠠᠭ᠎ᠠ
              </div>
            )}
          </div>
          <div></div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex-1 flex flex-col">
          {/* Days of week header */}
          <div className="grid grid-cols-7 bg-gray-50">
            {daysOfWeek.map((day, index) => (
              <div
                key={day}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className={`p-2 flex items-center justify-center text-[10px] font-medium text-gray-700 border-r border-gray-200 ${
                  index === 6 ? "border-r-0" : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 flex-1 auto-rows-fr">
            {renderCalendarDays()}
          </div>
        </div>
        <div className="w-full flex gap-5 max-h-[150px] justify-end">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#D9D9D9] w-4 h-4 aspect-square"></div>
            <p
              className="text-[10px] pl-2"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠵᠣᢈᠢᠶᠠᠭᠳᠠᠭᠰᠠᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#FB00FF] w-4 h-4 aspect-square"></div>

            <p
              className="text-[10px] pl-2"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠪᠠᠭ᠂ ᠪᠦᠯᠦᢉ᠂ ᠪᠦᢈᠦ ᢉᠡᠰᠢᢉᠦᠳ ᠦ᠋ᠨ ᠠᠭᠤᠯᠵᠠᠯᠲᠠ
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#FFFF00] w-4 h-4 aspect-square"></div>

            <p
              className="text-[10px] pl-2"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ
            </p>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      <EventModal
        selectedEvent={selectedEvent}
        showModal={showModal}
        closeModal={closeModal}
        formatDateToMongolian={formatDateToMongolian}
      />
    </div>
  );
}
