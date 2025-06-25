import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import localApiService from "@/services/localApiService";
import toast from "react-hot-toast";

export default function ContactDesktop() {
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const contactTypeOptions = [
    { value: 1, label: "ᠬᠦᠮᠦᠨ ᠦ ᠡᠷᠬᠡ" },
    { value: 2, label: "ᠰᠠᠢᠨ ᠳᠤᠷᠠᠯ" },
    { value: 3, label: "ᠬᠠᠮᠲᠤᠷᠠᠯ" },
    { value: 4, label: "ᠰᠤᠷᠭᠠᠯ" },
    { value: 5, label: "ᠪᠤᠰᠤᠳ" },
  ];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      contactType: 5,
      message: "",
    },
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const onSubmit = async (data) => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await localApiService.contact.submitContactRequest({
        contactType: data.contactType,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      // Show success toast
      toast.success(
        "ᠲᠠᠨ ᠤ᠋ ᠬᠦᠰᠡᠯᠲᠡ ᠠᠮᠵᠢᠯᠲᠲᠠᠢ ᠢᠯᠭᠡᠭᠡᠳᠯᠡᠭᠡ᠃ ᠪᠢᠳᠡ ᠲᠠᠨ ᠲᠠᠢ ᠤᠳᠠᠬᠭᠦ ᠬᠣᠯᠪᠣᠭᠳᠠᠬᠤ ᠪᠣᠯᠨᠠ᠃"
      );

      // Reset form
      reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      // Show error toast
      toast.error(
        "ᠬᠦᠰᠡᠯᠲᠡ ᠢᠯᠭᠡᠭᠡᠬᠦᠳ ᠠᠯᠳᠠᠭ᠎ᠠ ᠭᠠᠷᠯᠠᠭ᠎ᠠ: " +
          (error.message || "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full hidden sm:flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-16 p-4 h-full">
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠤᠲᠠᠰᠤ: ᠗᠐᠐᠐-᠔᠗᠐᠘
          </h2>
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠠᠩᠬᠠᠷᠤᠨ᠎ᠠ ᠤ᠋ᠤ: ᠪᠢᠳᠡ ᠲᠠᠨ ᠤ᠋ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ ᠤᠲᠠᠰᠤ ᠪᠠᠷ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠬᠤ
            ᢈᠦᠷᠲᠡᠯ᠎ᠡ ᠲᠠᠨ ᠤ᠋ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪᠲᠤ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠣᠷᠤᠭᠤᠯᠬᠤ᠂ ᠴᠤᠴᠠᠯᠠᠬᠤ
            ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃ ᠬᠣᠯᠪᠤᠭᠳᠠᠬᠤ ᠳ᠋ᠤᠭᠠᠷ ᠗᠐᠐᠐-᠔᠗᠐᠕᠃
          </p>
        </div>
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯᠡ ᠶ᠋ᠢᠨ ᠣᠹᠹᠢᠰ
          </h2>
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ ᠬᠣᠲᠠ᠂ ᠰᠦᢈᠡᠪᠠᠭᠠᠲᠤᠷ ᠳᠡᢉᠦᠷᢉᠡ᠂ ᠖-ᠷ ᠬᠣᠷᠢᠶ᠎ᠠ᠂ AB Centerᠯ᠂ ᠗
            ᠳᠠᠪᠬᠤᠷ
          </p>
        </div>
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠬᠣᠯᠪᠤᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            {/* Name Field */}
            <div className="flex gap-2">
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠨᠡᠷ᠎ᠡ*
              </p>
              <input
                {...register("name", {
                  required: "ᠨᠡᠷ᠎ᠡ ᠬᠡᠷᠡᠭᠲᠡᠢ",
                  minLength: {
                    value: 2,
                    message: "ᠨᠡᠷ᠎ᠡ ᠪᠠᠭ᠎ᠠ ᠪᠠᠷᠠᠭᠤᠨ ᠳᠤ ᠬᠣᠶᠠᠷ ᠦᠰᠦᠭ ᠪᠠᠢᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ",
                  },
                })}
                className={`border rounded-md p-2 w-20 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
              {errors.name && (
                <div
                  className="text-red-500 text-xs"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    width: "80px",
                  }}
                >
                  {errors.name.message}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="flex gap-2">
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠢᠮᠡᠶᠢᠯ ᠬᠠᠶᠢᠭ*
              </p>
              <input
                type="email"
                {...register("email", {
                  required: "ᠢᠮᠡᠶᠢᠯ ᠬᠡᠷᠡᠭᠲᠡᠢ",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "ᠢᠮᠡᠶᠢᠯ ᠪᠤᠷᠤᠭᠤ",
                  },
                })}
                className={`border rounded-md p-2 w-20 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
              {errors.email && (
                <div
                  className="text-red-500 text-xs"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    width: "80px",
                  }}
                >
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Subject Field */}
            <div className="flex gap-2">
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠭᠠᠷᠴᠠᠭ
              </p>
              <input
                {...register("subject")}
                className="border border-gray-300 rounded-md p-2 w-20"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
            </div>

            {/* Phone Field */}
            <div className="flex gap-2">
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳ᠋ᠤᠭᠠᠷ (ᠵᠠᠪᠠᠯ ᠪᠢᠰᠢ)
              </p>
              <input
                type="tel"
                {...register("phone")}
                className="border border-gray-300 rounded-md p-2 w-20"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
            </div>

            {/* Contact Type Dropdown */}
            <div className="flex gap-2">
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠶᠠᠮᠠᠷ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ?
              </p>
              <Controller
                name="contactType"
                control={control}
                render={({ field }) => (
                  <div className="relative dropdown-container">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="border border-gray-300 rounded-md p-2 w-20 text-xs bg-white flex flex-col items-center justify-center h-full gap-2"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      <div
                        style={{
                          writingMode: "vertical-lr",
                          textOrientation: "upright",
                        }}
                        className="flex items-center justify-center"
                      >
                        {
                          contactTypeOptions.find(
                            (opt) => opt.value === field.value
                          )?.label
                        }
                      </div>
                      <div
                        className="flex items-center justify-center"
                        style={{ writingMode: "horizontal-tb" }}
                      >
                        {isDropdownOpen ? "◀" : "▶"}
                      </div>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-0 left-24 bg-white border border-gray-300 rounded-md shadow-lg z-10 flex">
                        {contactTypeOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              field.onChange(option.value);
                              setIsDropdownOpen(false);
                            }}
                            className="block w-20 p-2 text-xs hover:bg-gray-100 border-r border-gray-200 last:border-r-0 h-full flex items-center justify-center"
                            style={{
                              writingMode: "vertical-lr",
                              textOrientation: "upright",
                            }}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Message Field */}
            <div className="flex gap-2">
              <p
                className="text-sm"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠮᠧᠰᠰᠧᠵᠢ*
              </p>
              <textarea
                {...register("message", {
                  required: "ᠮᠧᠰᠰᠧᠵᠢ ᠬᠡᠷᠡᠭᠲᠡᠢ",
                  minLength: {
                    value: 10,
                    message:
                      "ᠮᠧᠰᠰᠧᠵᠢ ᠪᠠᠭ᠎ᠠ ᠪᠠᠷᠠᠭᠤᠨ ᠳᠤ ᠠᠷᠪᠠᠨ ᠦᠰᠦᠭ ᠪᠠᠢᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ",
                  },
                })}
                className={`border rounded-md p-2 w-60 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
              {errors.message && (
                <div
                  className="text-red-500 text-xs"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    width: "80px",
                  }}
                >
                  {errors.message.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className={`p-2 rounded-md text-sm font-bold ${
                  loading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#FFFF00] text-black hover:brightness-105 transition-all"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                  width: "60px",
                }}
              >
                {loading ? "ᠢᠯᠭᠡᠭᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ..." : "ᠢᠯᠭᠡᠭᠡᠬᠦ"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
