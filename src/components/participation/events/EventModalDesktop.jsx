export default function EventModalDesktop({
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
        className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-start">
            <h3
              className="text-2xl font-bold"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {selectedEvent.title}
            </h3>
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
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
            >
              {selectedEvent.type}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row h-[70vh]">
          {/* Left Side - Event Details */}
          <div className="w-full lg:w-1/2 p-4 lg:p-6 overflow-y-auto">
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-gray-50 p-3 lg:p-4 rounded-lg">
                <h4
                  className="text-base lg:text-lg font-semibold text-gray-800 mb-3"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠠᠷᠭ᠎ᠠ ᢈᠡᠮᠵᠢᠶ᠎ᠡ ᠶ᠋ᠢᠨ ᠲᠠᠢᠢᠯᠪᠤᠷᠢ
                </h4>
                <div className="grid grid-cols-1 gap-3 lg:gap-4">
                  <div className="border-l-4 border-blue-500 pl-3 lg:pl-4">
                    <p
                      className="text-xs lg:text-sm font-medium text-gray-600"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠪᠤᠷᠲᠠᠯ ᠡᠬᠯᠠᠬᠤ:
                    </p>
                    <p
                      className="text-sm lg:text-base text-gray-900 mt-1"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      {formatDateToMongolian(
                        new Date(selectedEvent.startDate)
                          .toISOString()
                          .split("T")[0]
                      )}{" "}
                      {selectedEvent.startTime}
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-3 lg:pl-4">
                    <p
                      className="text-xs lg:text-sm font-medium text-gray-600"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠪᠤᠷᠲᠠᠯ ᠳᠤᠤᠰᠠᠬᠤ:
                    </p>
                    <p
                      className="text-sm lg:text-base text-gray-900 mt-1"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      {formatDateToMongolian(
                        new Date(selectedEvent.endDate)
                          .toISOString()
                          .split("T")[0]
                      )}{" "}
                      {selectedEvent.endTime}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-3 lg:pl-4">
                    <p
                      className="text-xs lg:text-sm font-medium text-gray-600"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      ᠬᠠᠭᠠᠢ:
                    </p>
                    <p
                      className="text-sm lg:text-base text-gray-900 mt-1"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      {selectedEvent.location || "ᠲᠣᠭᠲᠠᠭᠠᠭᠰᠠᠨ ᠦᠭᠡᠢ"}
                    </p>
                  </div>

                  {selectedEvent.membersOnly && (
                    <div className="border-l-4 border-purple-500 pl-3 lg:pl-4">
                      <p
                        className="text-xs lg:text-sm font-medium text-gray-600"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                        }}
                      >
                        ᠠᠩᠭᠢᠯᠠᠯ:
                      </p>
                      <p
                        className="text-sm lg:text-base text-purple-900 mt-1 font-medium"
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                        }}
                      >
                        ᠪᠠᠭ᠂ ᠪᠦᠯᠦᢉ᠂ ᠪᠦᢈᠦ ᢉᠡᠰᠢᢉᠦᠳ ᠦ᠋ᠨ ᠠᠭᠤᠯᠵᠠᠯᠲᠠ
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
                <h4
                  className="text-base lg:text-lg font-semibold text-blue-800 mb-3"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                  }}
                >
                  ᠲᠠᠨᠢᠯᠴᠤᠤᠯᠭ᠎ᠠ:
                </h4>
                {selectedEvent.description ? (
                  <p
                    className="text-sm lg:text-base text-gray-700 leading-relaxed"
                    style={{
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    }}
                  >
                    {selectedEvent.description}
                  </p>
                ) : (
                  <p
                    className="text-sm lg:text-base text-gray-500 italic leading-relaxed"
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
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full lg:w-1/2 p-4 lg:p-6">
            <div className="h-64 lg:h-full bg-gray-200 rounded-lg overflow-hidden shadow-inner">
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
  );
}
