import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Button";

export default function CalendarDesktop() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 1)); // April 2025
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
    const mongolianDigits = ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"];
    return num
      .toString()
      .split("")
      .map((digit) => mongolianDigits[parseInt(digit)])
      .join("");
  };

  // Sample events data
  const events = {
    "2025-04-05": {
      title: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠬᠤᠷᠠᠯ ᠤ᠋ᠨ ᠬᠤᠷᠢᠶᠠᠨ",
      color: "bg-[#D9D9D9]",
      type: "ᠵᠣᢈᠢᠶᠠᠭᠳᠠᠭᠰᠠᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ",
      startTime: "09:00",
      endTime: "11:00",
      description: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠬᠤᠷᠠᠯ ᠤ᠋ᠨ ᠰᠠᠷ᠎ᠠ ᠪᠦᠷᠢ ᠬᠤᠷᠢᠶᠠᠨ",
      location: "ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ ᠬᠣᠲᠠ",
    },
    "2025-04-12": {
      title: "ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤ ᠰᠤᠷᠭᠠᠯ",
      color: "bg-[#FB00FF]",
      type: "ᠪᠠᠭ᠂ ᠪᠦᠯᠦᢉ᠂ ᠪᠦᢈᠦ ᢉᠡᠰᠢᢉᠦᠳ ᠦ᠋ᠨ ᠠᠭᠤᠯᠵᠠᠯᠲᠠ",
      startTime: "14:00",
      endTime: "16:00",
      description: "ᠪᠦᠯᠦᢉ ᠦ᠋ᠨ ᠭᠢᠰᠦᠳ ᠦ᠋ᠨ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤ ᠰᠤᠷᠭᠠᠯ ᠰᠠᠯᠪᠤᠷᠢᠯᠠᠯᠲᠠ",
      location: "ᠰᠢᠶᠠᠨ ᠣᠯᠠᠨ ᠠᠮᠵᠢᠯᠲᠠ ᠶ᠋ᠢᠨ ᠣᠷᠣᠨ",
    },
    "2025-04-18": {
      title: "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠰᠤᠷᠭᠠᠯ",
      color: "bg-[#FFFF00]",
      type: "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ",
      startTime: "10:30",
      endTime: "12:30",
      description: "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠬᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠰᠤᠷᠭᠠᠯ ᠰᠠᠯᠪᠤᠷᠢᠯᠠᠯᠲᠠ",
      location: "ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠣᠷᠣᠨ",
    },
    "2025-04-22": {
      title: "ᠠᠨᠬᠠᠨ ᠳᠤᠭᠠᠠᠷᠯᠠᠭ ᠬᠤᠪᠠᠠᠷᠢ",
      color: "bg-[#D9D9D9]",
      type: "ᠵᠣᢈᠢᠶᠠᠭᠳᠠᠭᠰᠠᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ",
      startTime: "17:00",
      endTime: "18:00",
      description: "ᠠᠨᠬᠠᠨ ᠳᠤᠭᠠᠠᠷᠯᠠᠭ ᠲᠦᠷᠦᠯ ᠦ᠋ᠨ ᠬᠤᠪᠠᠠᠷᠢ ᠪᠠ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ",
      location: "ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠧᠱᠢᠨ᠋ᠯ ᠪᠠᠢᠷᠠᠨ",
    },
    "2025-04-25": {
      title: "ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠤᠷᠤᠯᠴᠠᠯᠲᠠ ᠬᠤᠷᠠᠯ",
      color: "bg-[#FFFF00]",
      type: "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ",
      startTime: "13:00",
      endTime: "15:00",
      description: "ᠣᠯᠠᠨ ᠨᠡᠶᠢᠲᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠠ ᠤᠷᠤᠯᠴᠠᠯᠲᠠ",
      location: "ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ᠋ ᠨᠠᠢᠷᠠᠮᠳᠠᠯ ᠤ᠋ᠨ ᠣᠷᠣᠨ",
    },
  };

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
      days.push(
        <div
          key={`prev-${day}`}
          className="border border-gray-200 p-2 text-gray-400 text-sm cursor-pointer hover:bg-gray-50 flex flex-col h-full min-h-[80px] min-w-[240px]"
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

      days.push(
        <div
          key={day}
          className={`border border-gray-200 p-2 text-sm cursor-pointer hover:bg-gray-50 relative flex flex-col h-full min-h-[80px] min-w-[240px] ${
            event ? "hover:bg-blue-50" : ""
          }`}
          onClick={() => handleDayClick(dateString)}
        >
          <span className="font-medium">{toMongolianNumerals(day)}</span>
          {event && (
            <div
              className={`absolute bottom-1 left-1 right-1 ${event.color} rounded px-1 py-0.5 text-xs truncate`}
            >
              {event.title}
            </div>
          )}
        </div>
      );
    }

    // Next month's leading days to fill the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    for (let day = 1; days.length < totalCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="border border-gray-200 p-2 text-gray-400 text-sm cursor-pointer hover:bg-gray-50 flex flex-col h-full min-h-[80px] min-w-[240px]"
        >
          {toMongolianNumerals(day)}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="h-full flex gap-10 p-14 overflow-x-auto w-auto flex-shrink-0">
      {/* Left side - Legend */}
      <div className="h-full flex gap-10">
        <div className="h-full flex gap-12">
          <h2
            className="text-base font-bold"
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
            className="text-base font-bold"
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
            className="text-base font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠲᠠᠨ ᠤ᠋ ᠣᠷᠤᠯᠴᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢᠲᠠᠢ ᠤᠯᠠᠮᠵᠢᠯᠠᠯᠲᠤ᠂ ᠵᠢᠯ ᠪᠣᠯᠭᠠᠨ ᠵᠣᢈᠢᠶᠠᠨ
            ᠪᠠᠶᠢᠭᠤᠯᠳᠠᠭ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠨᠦ᠋ᢉᠦᠳ᠃
          </h2>
          <div className="flex flex-col gap-2">
            <div className="bg-[#D9D9D9] w-4 h-4 aspect-square"></div>
            <p
              className="text-xs"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠵᠣᢈᠢᠶᠠᠭᠳᠠᠭᠰᠠᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#FB00FF] w-4 h-4 aspect-square"></div>

            <p
              className="text-xs"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              ᠪᠠᠭ᠂ ᠪᠦᠯᠦᢉ᠂ ᠪᠦᢈᠦ ᢉᠡᠰᠢᢉᠦᠳ ᠦ᠋ᠨ ᠠᠭᠤᠯᠵᠠᠯᠲᠠ
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#FFFF00] w-4 h-4 aspect-square"></div>

            <p
              className="text-xs"
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

      {/* Right side - Calendar Grid */}
      <div className="flex-1 bg-white flex flex-col h-full">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              onClick={navigateToToday}
              className="px-4 py-2 hover:bg-gray-100 text-sm border rounded-md transition-colors"
            >
              <p>ᠥᠨᠥᠳᠦᠷ</p>
            </button>
          </div>
          <h2 className="text-xl font-semibold">
            {monthNames[currentDate.getMonth()]}{" "}
            {toMongolianNumerals(currentDate.getFullYear())}
          </h2>
          <div></div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex-1 flex flex-col">
          {/* Days of week header */}
          <div className="grid grid-cols-7 bg-gray-50">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="p-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 last:border-r-0"
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
      </div>

      {/* Event Details Modal */}
      {showModal && selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 text-3xl font-light"
                >
                  ×
                </button>
              </div>
              <div className="mt-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedEvent.color === "bg-[#D9D9D9]"
                      ? "bg-gray-200 text-gray-800"
                      : selectedEvent.color === "bg-[#FB00FF]"
                      ? "bg-pink-200 text-pink-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {selectedEvent.type}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex h-[70vh]">
              {/* Left Side - Event Details */}
              <div className="w-1/2 p-6 overflow-y-auto">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4
                      className="text-lg font-semibold text-gray-800 mb-3"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᠲᠠᠢᠢᠯᠪᠤᠷᠢ
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <p
                          className="text-sm font-medium text-gray-600"
                          style={{
                            writingMode: "vertical-lr",
                            textOrientation: "upright",
                          }}
                        >
                          ᠪᠤᠷᠲᠠᠯ ᠡᠬᠯᠠᠬᠤ:
                        </p>
                        <p className="text-base text-gray-900 mt-1">
                          {formatDateToMongolian(selectedEvent.date)}{" "}
                          {selectedEvent.startTime}
                        </p>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <p
                          className="text-sm font-medium text-gray-600"
                          style={{
                            writingMode: "vertical-lr",
                            textOrientation: "upright",
                          }}
                        >
                          ᠪᠤᠷᠲᠠᠯ ᠳᠤᠤᠰᠠᠬᠤ:
                        </p>
                        <p className="text-base text-gray-900 mt-1">
                          {formatDateToMongolian(selectedEvent.date)}{" "}
                          {selectedEvent.endTime}
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <p
                          className="text-sm font-medium text-gray-600"
                          style={{
                            writingMode: "vertical-lr",
                            textOrientation: "upright",
                          }}
                        >
                          ᠬᠠᠭᠠᠢ:
                        </p>
                        <p className="text-base text-gray-900 mt-1">
                          {selectedEvent.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4
                      className="text-lg font-semibold text-blue-800 mb-3"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠲᠠᠨᠢᠯᠴᠤᠤᠯᠭ᠎ᠠ:
                    </h4>
                    <p
                      className="text-base text-gray-700 leading-relaxed"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Google Map */}
              <div className="w-1/2 p-6">
                <div className="h-full bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8007304077376!2d106.91693431534425!3d47.918754779196805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692d9c6bfde3d%3A0x8c1a7ac1e1b5f234!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2s!4v1645123456789!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Location Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-4 h-4 rounded-full ${selectedEvent.color}`}
                  ></div>
                  <span
                    className="text-sm text-gray-600"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {selectedEvent.type}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const changeitems = [
  {
    id: 1,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
    description:
      "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃  ᢈᠡᠷᠪᠡ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠪᠥᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ ᠪᠣᠯ ᠡᠨᠳᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᢉᠡᠷᠡᠢ᠃",
  },
  {
    id: 2,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
    description:
      "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃  ᢈᠡᠷᠪᠡ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠪᠥᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ ᠪᠣᠯ ᠡᠨᠳᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᢉᠡᠷᠡᠢ᠃",
  },
  {
    id: 3,
    title: "ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠣᠷᠤᠯᠴᠠᠮᠠᠷ ᠪᠠᠶᠢᠨ᠎ᠠ ᠤᠤ?",
    description:
      "ᠥᠪᠡᠷ ᠲᠦ ᠪᠡᠨ ᠬᠠᠮᠤᠭ ᠤ᠋ᠨ ᠣᠶᠢᠷ᠎ᠠ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶᠡᠨ ᠳ᠋ᠦ ᠨᠢᢉᠡᠳᠴᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠲᠠᠢ ᠠᠭᠤᠯᠵᠠᠭᠠᠷᠠᠢ᠃  ᢈᠡᠷᠪᠡ ᠲᠠ ᠥᠪᠡᠷ ᠢ᠋ᠶᠡᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠪᠥᢉᠡᠳ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠥᠷᠨᠢᢉᠦᠯᢈᠦ ᠪᠣᠯ ᠡᠨᠳᠡ ᠨᠡᠶᠢᠲᠡᠯᠡᢉᠡᠷᠡᠢ᠃",
  },
];
