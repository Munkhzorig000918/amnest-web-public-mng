import { X } from "lucide-react";

export default function EventModal({
  selectedEvent,
  showModal,
  closeModal,
  formatDateToMongolian,
}) {
  if (!showModal || !selectedEvent) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="relative bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-3xl font-light"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="w-full p-8 flex flex-col md:flex-row justify-between h-[70hv] gap-4 overflow-x-auto">
          <div className="flex flex-row gap-4">
            <h3
              className="text-2xl font-bold"
              style={{
                writingMode: "vertical-lr",
              }}
            >
              {selectedEvent.title}
            </h3>
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-sm lg:text-base font-bold text-gray-600"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠪᠤᠷᠲᠠᠯ ᠡᠬᠯᠠᠬᠤ:
              </p>
              <p
                className="text-xs lg:text-sm text-gray-900"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {formatDateToMongolian(
                  new Date(selectedEvent.startDate).toISOString().split("T")[0]
                )}{" "}
                {selectedEvent.startTime}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-sm lg:text-base font-bold text-gray-600"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠪᠤᠷᠲᠠᠯ ᠳᠤᠤᠰᠠᠬᠤ:
              </p>
              <p
                className="text-xs lg:text-sm text-gray-900"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {formatDateToMongolian(
                  new Date(selectedEvent.endDate).toISOString().split("T")[0]
                )}{" "}
                {selectedEvent.endTime}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-sm lg:text-base font-bold text-gray-600"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠬᠠᠭᠠᠢ:
              </p>
              <p
                className="text-xs lg:text-sm text-gray-900"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {selectedEvent.location || "ᠲᠣᠭᠲᠠᠭᠠᠭᠰᠠᠨ ᠦᠭᠡᠢ"}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="text-sm lg:text-base font-bold text-gray-600"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                {selectedEvent.type}
              </span>
              <div
                className={`w-4 h-4 rounded-full ${selectedEvent.color}`}
              ></div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4
                className="text-sm lg:text-base font-bold text-gray-600"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠲᠠᠨᠢᠯᠴᠤᠤᠯᠭ᠎ᠠ:
              </h4>
              {selectedEvent.description ? (
                <p
                  className="text-xs lg:text-sm text-gray-600"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  {selectedEvent.description}
                </p>
              ) : (
                <p
                  className="text-sm lg:text-base text-gray-600"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠲᠠᠨᠢᠯᠴᠤᠤᠯᠭ᠎ᠠ ᠦᠭᠡᠢ
                </p>
              )}
            </div>
          </div>
          <div className="p-8 h-64 lg:h-full w-full bg-gray-200 rounded-lg shadow-inner">
            {selectedEvent.location ? (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                  selectedEvent.location
                )}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
                onError={(e) => {
                  // Fallback to search query if place API fails
                  e.target.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8007304077376!2d106.91693431534425!3d47.918754779196805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692d9c6bfde3d%3A0x8c1a7ac1e1b5f234!2s${encodeURIComponent(
                    selectedEvent.location
                  )}!5e0!3m2!1sen!2s!4v1645123456789!5m2!1sen!2s`;
                }}
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.8007304077376!2d106.91693431534425!3d47.918754779196805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692d9c6bfde3d%3A0x8c1a7ac1e1b5f234!2sUlaanbaatar%2C%20Mongolia!5e0!3m2!1sen!2s!4v1645123456789!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Default Location Map"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
