import Image from "next/image";
import Button from "@/components/common/Button";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonationDesktop() {
  return (
    <div className="h-full flex gap-20 overflow-x-auto w-auto flex-shrink-0 max-h-screen overflow-y-hidden">
      <BannerSlider images={bannerImages} width="90rem" />
      <div className="flex gap-16 p-8 m-4 h-full bg-[#48483D] text-white rounded-lg">
        <div className="flex gap-7">
          <h2
            className="text-2xl font-bold"
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
          >
            ᠬᠠᠨᠳᠢᠪ ᠡᠷᢉᠦᢈᠦ
          </h2>
          <p
            style={{
              writingMode: "vertical-lr",
              textOrientation: "upright",
            }}
            className="text-sm"
          >
            ᠶᠠᠭ ᠣᠳᠤ ᠪᠢᠳᠡᠨ ᠳ᠋ᠦ ᠬᠠᠨᠳᠢᠪ ᠢᠯᠡᢉᠡᠵᠦ᠂ ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠡᠳ᠋ᠯᠡᠳᠡᢉ
            ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢ ᠪᠦᠲᠦᢉᠡᢈᠦ ᠳ᠋ᠦ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠤᠭᠠᠷᠠᠢ
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
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠨᠡᠷ᠎ᠡ*
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20 text-black"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠢᠮᠡᠶᠢᠯ ᠬᠠᠶᠢᠭ*
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20 text-black"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠭᠠᠷᠴᠠᠭ
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20 text-black"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠤᠲᠠᠰᠤᠨ ᠤ᠋ ᠳ᠋ᠤᠭᠠᠷ (ᠵᠠᠪᠠᠯ ᠪᠢᠰᠢ)
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20 text-black"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠶᠠᠮᠠᠷ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ?
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-20 text-black"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
          <div className="flex gap-2">
            <p
              className="text-sm"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠮᠧᠰᠰᠧᠵᠢ
            </p>
            <textarea
              type="text"
              className="border border-gray-300 rounded-md p-2 w-60 text-black"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 px-14 py-4 bg-[#F1F1F1]">
        <h2
          className="text-2xl font-bold"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᠲᠠᠨ ᠳ᠋ᠤ ᠪᠠᠶᠠᠷᠯᠠᠯ᠎
        </h2>
        <p
          className="text-sm"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠲᠦ ᠦᠨ᠎ᠡ ᠲᠡᠢ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ
          ᠣᠷᠤᠭᠤᠯᠵᠤ᠂ ᠬᠠᠨᠳᠢᠪ ᠥᢉᢉᠦᢉᠰᠡᠨ ᠲᠠᠨ ᠳ᠋ᠤ ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ᠃ ᠶᠠᠭ ᠲᠠᠨᠢ ᠰᠢᠭ ᢈᠦᠮᠦᠨ ᠦ᠋
          ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠰᠠᠨᠠᠭ᠎ᠠ ᠲᠠᠯᠪᠢᠵᠤ᠂ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠳᠠᠭ ᢈᠦᠮᠦᠰ ᠦ᠋ᠨ
          ᠬᠠᠨᠳᠢᠪ ᠢ᠋ᠶᠠᠷ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠰᠠᠩᢈᠦᠵᠢᠳᠡᢉ᠃
          ᠪᠢᠳᠡ ᠲᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠰᠡᠨ ᠬᠠᠨᠳᠢᠪ ᠢ᠋ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠪᠤᠰᠤᠳ
          ᠲᠤ ᠲᠦᢉᠡᢉᠡᠵᠦ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ᠂ ᠬᠠᠮᠠᠭᠠᠯᠠᠳᠠᠭ ᢈᠦᠮᠦᠰ ᠢ᠋
          ᠪᠡᠯᠡᠳᢈᠡᢈᠦ ᠳ᠋ᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ ᠵᠣᠷᠢᠭᠲᠠᠨ ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᠦᠢᠯᠡ
          ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠶ᠋ᠢ ᠳᠡᠮᠵᠢᢈᠦ ᠳ᠋ᠦ᠂ ᠦᠵᠡᠯ ᠪᠣᠳᠤᠯ ᠢ᠋ᠶᠠᠨ ᠢᠯᠡᠷᢈᠡᠶᠢᠯᠡᢈᠦ ᠡᠷᢈᠡ᠂ ᠢᠷᢉᠡᠨ
          ᠦ᠋ ᠨᠡᠶᠢᢉᠡᠮ ᠦ᠋ᠨ ᠣᠷᠤᠨ ᠵᠠᠢ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ᠂ ᠠᠭᠤᠷ ᠠᠮᠢᠰᠬᠤᠯ ᠤ᠋ᠨ ᠰᠢᠳᠤᠷᠭᠤ
          ᠶᠣᠰᠤ ᠶ᠋ᠢ ᠱᠠᠭᠠᠷᠳᠠᠬᠤ ᠳ᠋ᠤ ᠵᠣᠷᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ᠃
        </p>
      </div>
      <div className="flex gap-7 p-4">
        <div className="flex gap-5">
          <h2
            className="text-2xl font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠲᠠᠨ ᠳ᠋ᠤ ᠪᠠᠶᠠᠷᠯᠠᠯ᠎
          </h2>
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠦᠢᠯᠡᠰ ᠲᠦ ᠦᠨ᠎ᠡ ᠲᠡᠢ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ
            ᠣᠷᠤᠭᠤᠯᠵᠤ᠂ ᠬᠠᠨᠳᠢᠪ ᠥᢉᢉᠦᢉᠰᠡᠨ ᠲᠠᠨ ᠳ᠋ᠤ ᠪᠠᠶᠠᠷᠯᠠᠯ᠎ᠠ᠃ ᠶᠠᠭ ᠲᠠᠨᠢ ᠰᠢᠭ ᢈᠦᠮᠦᠨ ᠦ᠋
            ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠰᠠᠨᠠᠭ᠎ᠠ ᠲᠠᠯᠪᠢᠵᠤ᠂ ᠬᠤᠪᠢ ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠳᠠᠭ ᢈᠦᠮᠦᠰ
            ᠦ᠋ᠨ ᠬᠠᠨᠳᠢᠪ ᠢ᠋ᠶᠠᠷ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠩᠯ ᠦ᠋ᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ
            ᠰᠠᠩᢈᠦᠵᠢᠳᠡᢉ᠃ ᠪᠢᠳᠡ ᠲᠠᠨ ᠤ᠋ ᠲᠥᠯᠦᢉᠰᠡᠨ ᠬᠠᠨᠳᠢᠪ ᠢ᠋ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ
            ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠢ᠋ ᠪᠤᠰᠤᠳ ᠲᠤ ᠲᠦᢉᠡᢉᠡᠵᠦ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ᠂
            ᠬᠠᠮᠠᠭᠠᠯᠠᠳᠠᠭ ᢈᠦᠮᠦᠰ ᠢ᠋ ᠪᠡᠯᠡᠳᢈᠡᢈᠦ ᠳ᠋ᠦ᠂ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢ
            ᠵᠣᠷᠢᠭᠲᠠᠨ ᠨᠤᠭᠤᠳ ᠤ᠋ᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭ᠎ᠠ ᠶ᠋ᠢ ᠳᠡᠮᠵᠢᢈᠦ ᠳ᠋ᠦ᠂ ᠦᠵᠡᠯ ᠪᠣᠳᠤᠯ ᠢ᠋ᠶᠠᠨ
            ᠢᠯᠡᠷᢈᠡᠶᠢᠯᠡᢈᠦ ᠡᠷᢈᠡ᠂ ᠢᠷᢉᠡᠨ ᠦ᠋ ᠨᠡᠶᠢᢉᠡᠮ ᠦ᠋ᠨ ᠣᠷᠤᠨ ᠵᠠᠢ ᠶ᠋ᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠬᠤ ᠳ᠋ᠤ᠂
            ᠠᠭᠤᠷ ᠠᠮᠢᠰᠬᠤᠯ ᠤ᠋ᠨ ᠰᠢᠳᠤᠷᠭᠤ ᠶᠣᠰᠤ ᠶ᠋ᠢ ᠱᠠᠭᠠᠷᠳᠠᠬᠤ ᠳ᠋ᠤ ᠵᠣᠷᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ᠃
          </p>
          <Button text={"ᠲᠠᠶᠢᠯᠤᠨ"} className="max-h-min whitespace-nowrap" />
        </div>
        <div className="flex gap-5">
          <h2
            className="text-2xl font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ᠋ᠢ ᠢᠨᠲ᠋ᠧᠷᠨᠡᠰᠢᠨ ᠦ᠋ᠯ ᠦ᠋ᠨ ᠦᠶᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ ᠳ᠋ᠤ ᠬᠤᠪᠢ
            ᠨᠡᠮᠡᠷᠢ ᠪᠡᠨ ᠣᠷᠤᠭᠤᠯᠵᠤ ᠪᠣᠯᠬᠤ ᠪᠤᠰᠤᠳ ᠠᠷᠭ᠎ᠠ ᠶ᠋ᠢ ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ ᠤᠩᠰᠢᠭᠠᠷᠠᠢ᠃
          </h2>
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠬᠠᠨᠳᠢᠪ ᠥᢉᢈᠦ ᠲᠡᠢ ᠬᠣᠯᠪᠤᠭ᠎ᠠ ᠲᠠᠢ ᠠᠰᠠᠭᠤᠳᠠᠯ ᠢ᠋ᠶᠠᠷ ᠗᠐᠐᠐-᠔᠗᠐᠖ ᠤᠲᠠᠰᠤ ᠪᠠᠷ
            ᠬᠣᠯᠪᠤᠭᠳᠠᠵᠤ ᠳᠡᠯᢉᠡᠷᠡᠩᢉᠦᠢ ᠮᠡᠳᠡᢉᠡᠯᠡᠯ ᠠᠪᠤᠭᠠᠷᠠᠢ᠃
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 p-4">
        <div className="flex justify-center">
          <div className="w-[400px] h-[400px]">
            <Pie
              data={{
                labels: [
                  "ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ",
                  "ᠠᠷᠠᠳ ᠤ᠋ ᠡᠷᢈᠡ",
                  "ᠪᠠᠶᠢᠴᠠᠭᠠᠨ ᠤ᠋ ᠡᠷᢈᠡ",
                  "ᠰᠠᠷᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠡᠷᢈᠡ",
                  "ᠪᠤᠰᠤᠳ",
                ],
                datasets: [
                  {
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                      "#eab308", // Pure Yellow
                      "#374151", // Dark Gray
                      "#111827", // Black/Very Dark Gray
                      "#6b7280", // Medium Gray
                      "#d1d5db", // Light Gray
                    ],
                    borderColor: [
                      "#eab308", // Pure Yellow border
                      "#1f2937", // Dark gray border
                      "#000000", // Black border
                      "#4b5563", // Medium gray border
                      "#9ca3af", // Light gray border
                    ],
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                cutout: "50%", // Creates a gap inside the pie chart (donut effect)
                plugins: {
                  legend: {
                    display: false, // We'll use our custom legend
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        return context.label + ": " + context.parsed + "%";
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Custom Legend */}
        <div className="flex gap-2 mt-4">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: "#eab308" }}
            ></div>
            <span
              className="text-lg pl-2"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ (30%)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: "#374151" }}
            ></div>
            <span
              className="text-lg pl-2"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠠᠷᠠᠳ ᠤ᠋ ᠡᠷᢈᠡ (25%)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: "#111827" }}
            ></div>
            <span
              className="text-lg pl-2"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠪᠠᠶᠢᠴᠠᠭᠠᠨ ᠤ᠋ ᠡᠷᢈᠡ (20%)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: "#6b7280" }}
            ></div>
            <span
              className="text-lg pl-2"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠰᠠᠷᠭᠤᠯᠢ ᠶ᠋ᠢᠨ ᠡᠷᢈᠡ (15%)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: "#d1d5db" }}
            ></div>
            <span
              className="text-lg pl-2"
              style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
            >
              ᠪᠤᠰᠤᠳ (10%)
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] flex flex-col gap-7 py-20 px-6 max-h-screen">
        <div className="flex gap-5 bg-white p-6 h-1/2">
          <h2
            className="text-2xl font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠬᠠᠨᠳᠢᠪ ᠥᢉᢈᠦ ᠪᠤᠰᠤᠳ ᠠᠷᠭ᠎ᠠ ᠵᠠᠮ
          </h2>
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠯ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ
            ᠳ᠋ᠤ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᢈᠦ ᠮᠠᠰᠢ ᠣᠯᠠᠨ ᠠᠷᠭ᠎ᠠ ᠵᠠᠮ ᠪᠤᠢ᠃
          </p>
          <Button
            text={"ᠴᠠᠭᠠᠰᠢ ᠤᠩᠰᠢᠬᠤ"}
            type="secondary"
            className="max-h-min whitespace-nowrap"
          />
        </div>
        <div className="flex gap-5 bg-white p-6 h-1/2">
          <h2
            className="text-2xl font-bold"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠬᠠᠨᠳᠢᠪ ᠥᢉᢈᠦ ᠪᠤᠰᠤᠳ ᠠᠷᠭ᠎ᠠ ᠵᠠᠮ
          </h2>
          <p
            className="text-sm"
            style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
          >
            ᠮᠣᠩᠭᠣᠯ ᠤ᠋ᠨ ᠡᠮᠨᠧᠰᠲ ᠢᠨ᠋ᠲ᠋ᠧᠷᠨᠡᠰᠢᠯ ᠦ᠋ᠨ ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠦᠢᠯᠡ ᠠᠵᠢᠯᠯᠠᠭᠠᠨ
            ᠳ᠋ᠤ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᢈᠦ ᠮᠠᠰᠢ ᠣᠯᠠᠨ ᠠᠷᠭ᠎ᠠ ᠵᠠᠮ ᠪᠤᠢ᠃
          </p>
          <Button
            text={"ᠴᠠᠭᠠᠰᠢ ᠤᠩᠰᠢᠬᠤ"}
            type="secondary"
            className="max-h-min whitespace-nowrap"
          />
        </div>
      </div>
    </div>
  );
}

const reportItems = [
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
  {
    title:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠡᠷᢈᠡ ᠪᠡᠨ ᢈᠡᠷᠡᢉᠵᠢᢉᠦᠯᠵᠦ ᠴᠢᠳᠠᠳᠠᠭ ᠳᠡᠯᠡᢈᠡᠢ ᠶᠢᠷᠲᠢᠨᠴᠦ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ",
    description:
      "ᢈᠦᠮᠦᠨ ᠪᠦᠷᠢ ᠦᢉᠡ ᢈᠡᠯᠡᢈᠦ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠢ᠋ᠶᠡᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠪᠯᠡᠯᠳᠦᠨ ᠨᠢᢉᠡᠳᢈᠦ᠂ ᠬᠤᠷᠠᠨ ᠴᠢᠭᠤᠯᠬᠤ᠂ ᠰᠢᠳᠤᠷᠭᠤ ᠪᠤᠰᠤ ᠶᠠᠪᠤᠳᠠᠯ ᠢ᠋ ᠲᠠᠰᠤᠯᠤᠨ ᠵᠣᠭᠰᠤᠭᠠᠬᠤ ᠶ᠋ᠢᠨ ᠲᠥᠯᠦᢉᠡ ᠡᠷᢈᠡ ᠪᠡᠨ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠬᠤ᠃  ᢈᠦᠮᠦᠨ ᠦ᠋ ᠡᠷᢈᠡ ᠶ᠋ᠢᠨ ᠬᠠᠮᠠᠭᠠᠯᠠᠭᠴᠢᠳ ᠤ᠋ᠨ ᠠᠶᠤᠯ ᠦᢉᠡᠢ ᠪᠠᠶᠢᠳᠠᠯ ᠢ᠋ ᠬᠠᠩᠭᠠᠵᠤ᠂ ᠲᠡᠳᠡᠨ ᠳ᠋ᠦ ᠳᠡᠮᠵᠢᠯᢉᠡ ᠦᠵᠡᢉᠦᠯᠳᠡᢉ ᠪᠠᠶᠢᠬᠤ᠃  ᢈᠦᠮᠦᠰ ᠢ᠋ ᠡᠷᢈᠡ ᠪᠡᠨ ᠮᠡᠳᠡᠳᠡᢉ᠂ ᠱᠠᠭᠠᠷᠳᠠᠳᠠᠭ ᠪᠣᠯᠭᠠᠵᠤ ᠴᠢᠳᠠᠪᢈᠢᠵᠢᠭᠤᠯᠬᠤ᠃",
  },
];
