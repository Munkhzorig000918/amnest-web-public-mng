import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { useSubmitContactFormMutation } from "../../../redux/services/apiService";
import toast from "react-hot-toast";
import StaticHeader from "@/components/common/StaticHeader";

export default function ContactMobile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();

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
    if (isLoading) return;

    try {
      await submitContactForm({
        contactType: data.contactType,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }).unwrap();

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
          (error.data?.message || error.message || "Unknown error")
      );
    }
  };

  return (
    <div className="h-full w-full block sm:hidden p-4">
      <StaticHeader
        image="/images/news1.png"
        alt="Contact Page Header"
        width="100%"
        title="ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠬᠠᠪᠰᠤᠷᠠᠯ"
      />
      <div className="flex gap-10 max-h-[150px] overflow-x-auto">
        <div className="flex gap-2">
          <h2
            className="text-xs font-bold"
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
            className="text-[10px]"
          >
            ᠠᠩᠬᠠᠷᠤᠨ᠎ᠠ ᠤ᠋ᠤ: ᠪᠢᠳᠡ ᠲᠠᠨ ᠤ᠋ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠢ᠋ ᠤᠲᠠᠰᠤ ᠪᠠᠷ ᠪᠠᠲᠤᠯᠠᠭᠠᠵᠢᠭᠤᠯᠬᠤ
            ᢈᠦᠷᠲᠡᠯ᠎ᠡ ᠲᠠᠨ ᠤ᠋ ᠲᠣᠭᠲᠠᠮᠠᠯ ᠬᠠᠨᠳᠢᠪᠲᠤ ᠥᢉᠡᠷᠡᠴᠢᠯᠡᠯᠲᠡ ᠣᠷᠤᠭᠤᠯᠬᠤ᠂ ᠴᠤᠴᠠᠯᠠᠬᠤ
            ᠪᠣᠯᠤᠮᠵᠢ ᠦᢉᠡᠢ᠃ ᠬᠣᠯᠪᠤᠭᠳᠠᠬᠤ ᠳ᠋ᠤᠭᠠᠷ ᠗᠐᠐᠐-᠔᠗᠐᠕᠃
          </p>
        </div>
        <div className="flex gap-2">
          <h2
            className="text-xs font-bold"
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
            className="text-[10px]"
          >
            ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ ᠬᠣᠲᠠ᠂ ᠰᠦᢈᠡᠪᠠᠭᠠᠲᠤᠷ ᠳᠡᢉᠦᠷᢉᠡ᠂ ᠖-ᠷ ᠬᠣᠷᠢᠶ᠎ᠠ᠂ AB Centerᠯ᠂ ᠗
            ᠳᠠᠪᠬᠤᠷ
          </p>
        </div>
      </div>

      <div className="flex gap-7 mt-4 w-full">
        <h2
          className="text-xs font-bold"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "upright",
          }}
        >
          ᠬᠣᠯᠪᠤᠭ᠎ᠠ ᠪᠠᠷᠢᠬᠤ
        </h2>

        <div className="flex gap-2 overflow-x-auto w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            {/* Name Field */}
            <div className="flex gap-2">
              <p
                className="text-xs"
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
                className={`border rounded-md p-2 w-16 text-xs ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
              {errors.name && (
                <div
                  className="text-red-500 text-[10px]"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    width: "60px",
                  }}
                >
                  {errors.name.message}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="flex gap-2">
              <p
                className="text-xs"
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
                className={`border rounded-md p-2 w-16 text-xs ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
              {errors.email && (
                <div
                  className="text-red-500 text-[10px]"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    width: "60px",
                  }}
                >
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Subject Field */}
            <div className="flex gap-2">
              <p
                className="text-xs"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              >
                ᠭᠠᠷᠴᠠᠭ
              </p>
              <input
                {...register("subject")}
                className="border border-gray-300 rounded-md p-2 w-16 text-xs"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
            </div>

            {/* Phone Field */}
            <div className="flex gap-2">
              <p
                className="text-xs"
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
                className="border border-gray-300 rounded-md p-2 w-16 text-xs"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
            </div>

            {/* Contact Type Dropdown */}
            <div className="flex gap-2">
              <p
                className="text-xs"
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
                      className="border border-gray-300 rounded-md p-2 w-16 h-[400px] text-xs bg-white flex flex-col items-center justify-center gap-2"
                      style={{
                        writingMode: "vertical-lr",
                        textOrientation: "upright",
                      }}
                    >
                      <div className="flex items-center justify-center">
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
                      <div className="absolute top-0 left-20 bg-white border border-gray-300 rounded-md shadow-lg z-10 flex h-[400px]">
                        {contactTypeOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              field.onChange(option.value);
                              setIsDropdownOpen(false);
                            }}
                            className="w-16 p-2 text-xs hover:bg-gray-100 border-r border-gray-200 last:border-r-0 flex items-center justify-center"
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
                className="text-xs"
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
                className={`border rounded-md p-2 w-48 text-xs ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
              />
              {errors.message && (
                <div
                  className="text-red-500 text-[10px]"
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "upright",
                    width: "60px",
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
                disabled={isLoading}
                className={`p-2 rounded-md text-xs font-bold ${
                  isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#FFFF00] text-black hover:brightness-105 transition-all"
                }`}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                  width: "48px",
                }}
              >
                {isLoading ? "ᠢᠯᠭᠡᠭᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ..." : "ᠢᠯᠭᠡᠭᠡᠬᠦ"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
