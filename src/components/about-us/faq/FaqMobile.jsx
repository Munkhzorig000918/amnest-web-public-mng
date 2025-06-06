import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function FaqMobile() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} />
      </div>

      <div className="p-4">{/* Other content will go here */}</div>
    </div>
  );
}
