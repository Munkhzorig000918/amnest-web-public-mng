import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";
import SectionTitle from "@/components/common/SectionTitle";

export default function StructureChapterMembersDesktop() {
  return (
    <div className="h-full hidden sm:block">
      <BannerSlider images={bannerImages} width="90rem" />

      <div className="mx-auto p-4 text-[18px] sm:p-6 md:p-8 lg:my-10 lg:w-[84%]">
        <h4 className="py-2 text-[24px] font-semibold md:text-[32px]">
          Эмнести Интернэшлийн бүлгүүд
        </h4>

        <p className="text-justify">
          Монголын Эмнести Интернэшнл (МЭИ) нь байгуулагдсан цагаасаа эхлэн
          өнөөг хүртэл орон даяар хүний эрх хамгаалагч 10'000 гаруй гишүүд,
          дэмжигчидтэй болсон. Гишүүд дэмжигчид бүлэгт хуваагдан үйл ажиллагаанд
          оролцдог. Бүлэг тус бүр хариуцсан ахлагчтай бөгөөд бүлгийн хурал
          уулзалт тогтмол зохион байгуулж гишүүдээ үйл ажиллагаанд татан
          оролцуулдаг. Бүх гишүүдийн уулзалтыг жилд 4-н удаа бөгөөд улиралд нэг
          удаа зохион байгуулагддаг. Одоогоор 25-н бүлэгтэйгээр үйл ажиллагаагаа
          явуулж байна. Мөн түүнчлэн хөдөө орон нутагт, ЕБС, Их дээд сургууль
          дээр бүлэг, клуб байгуулан ажиллах боломжтой.
        </p>
      </div>

      <div className="mx-auto max-w-[1900px] p-4 sm:w-[90%] sm:p-4 md:p-0 md:pb-4 md:pl-10 md:pt-4">
        <div className="flex gap-4 justify-center">
          <div className="w-[332px] rounded-[8px] border border-solid border-gray-700">
            <div className="relative h-[271px] w-[332px]">
              <Image
                src="/images/aboutSub1/chapter/ZaluuchuudBulegFront.png"
                alt="Залуучуудын бүлэг"
                fill
                className="object-cover rounded-t-[8px]"
              />
            </div>
            <Link
              href="/participation/youthhumanrights"
              className="mx-auto flex justify-center border-t-2 border-black p-4 text-[24px]"
            >
              ЗАЛУУЧУУДЫН БҮЛЭГ
            </Link>
          </div>

          <div className="w-[332px] rounded-[8px] border border-solid border-gray-700">
            <div className="relative h-[271px] w-[332px]">
              <Image
                src="/images/aboutSub1/chapter/mergejilten.png"
                alt="Мэргэжилтнүүдийн бүлэг"
                fill
                className="object-cover rounded-t-[8px]"
              />
            </div>
            <div className="mx-auto flex justify-center border-t-2 border-black p-4 text-[24px]">
              МЭРГЭЖИЛТНҮҮДИЙН БҮЛЭГ
            </div>
          </div>

          <div className="w-[332px] rounded-[8px] border border-solid border-gray-700">
            <div className="relative h-[271px] w-[332px]">
              <Image
                src="/images/aboutSub1/chapter/gazriinremovebg-preview.png"
                alt="Орон нутгийн бүлэг"
                fill
                className="object-cover rounded-t-[8px]"
              />
            </div>
            <Link
              href="#oronnutag"
              className="mx-auto flex justify-center border-t-2 border-black p-4 text-[24px]"
            >
              ОРОН НУТГИЙН БҮЛЭГ
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center" id="oronnutag">
        <h3 className="h-[84px] items-center text-center text-[24px] sm:w-[901px] sm:text-[41px]">
          ОРОН НУТГИЙН БҮЛЭГ
        </h3>
        <div className="relative w-full max-w-[300px] sm:max-w-[500px] md:w-full md:max-w-[640px] h-[400px]">
          <Image
            src="/images/aboutSub1/chapter/gazriinremovebg-preview.png"
            alt="Монгол улсын газрын зураг"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div>
        <h4 className="mx-auto flex justify-center p-4 pt-8 text-center text-[24px] sm:w-[80%] md:py-20 md:text-[32px]">
          Монголын Эмнести Интернэшнлийн дэмжигч болон гишүүнийн ялгаа нь юу вэ?
        </h4>
      </div>

      <div className="mx-auto grid w-full pb-10 md:w-[80%] xl:grid-cols-2">
        <div className="relative flex flex-col justify-center px-4">
          <h4 className="flex py-2 text-[24px] sm:mx-auto sm:text-[32px]">
            ДЭМЖИГЧ
          </h4>
          <p className="text-justify text-[18px] sm:px-14 sm:py-10">
            Дэмжигч нь санхүүгийн хувьд хувь нэмрээ оруулж байгаа эсвэл Эмнести
            Интернэшнлийн арга хэмжээ авч байгаа хүмүүс. Энэ нь сар бүр
            хандивлагчаас авхуулаад онлайн өргөдөлд гарын үсэг зурсан хүн хүртэл
            байж болно. Дэмжигчид хороодод элсэх, удирдах үүрэг гүйцэтгэх зэрэг
            бидний хийдэг ихэнх зүйлд оролцож болох ч зарлагдсан албан тушаалд
            нэр дэвших боломжгүй. Мөн дэмжигчид бүс нутгийн, жилийн болон ээлжит
            бус гишүүдийн хуралд саналын эрхгүй оролцох боломжтой. Тэд бүсийн
            шийдвэр, захирал, олон улсын төлөөлөгчийн сонгуульд санал өгөх
            боломжгүй.
          </p>
          <Link
            href="/participation"
            className="mx-auto my-5 flex h-[64px] w-[264px] rounded-[5px] border border-gray-500 bg-[#fdff28] shadow-2xl sm:my-0 md:my-10"
          >
            <p className="mx-auto my-auto flex rounded-[15px] uppercase text-black">
              активизмд оролцох
            </p>
          </Link>
          <div className="xl:absolute xl:right-0 xl:h-full xl:border xl:border-dashed xl:border-gray-400"></div>
        </div>

        <div className="relative flex flex-col justify-center px-4">
          <h4 className="flex py-2 text-[24px] sm:mx-auto sm:text-[32px]">
            ГИШҮҮН
          </h4>
          <p className="text-justify text-[18px] sm:px-14 sm:py-10">
            Гишүүн засаглалтай холбоотой үйл ажиллагаанд бүрэн оролцох
            боломжтой. Жилийн нэгдсэн хурал болон ээлжит бус хурлын талаар
            зөвхөн гишүүдэд мэдэгддэг бөгөөд тэдгээр хуралдаанд зөвхөн гишүүд
            санал өгөх эрхтэй. Гишүүд Удирдах Зөвлөлийн албан тушаалд нэр дэвших
            эсвэл Дэлхийн Чуулга уулзалтад оролцох төлөөлөгчдийн бүрэлдэхүүнд
            орох боломжтой бөгөөд тэдгээр сонгуульд санал өгөх боломжтой. Бүх
            гишүүд өөрсдийн холбоо барих мэдээллээ засаглалтай холбоотой
            тодорхой зорилгоор бусад гишүүдтэй хуваалцахыг зөвшөөрөх ёстой.
          </p>
          <Link
            href="/member"
            className="mx-auto my-5 flex h-[64px] w-[264px] rounded-[5px] border border-gray-500 bg-[#fdff28] shadow-2xl sm:my-0 md:my-10"
          >
            <p className="mx-auto my-auto flex rounded-[15px] uppercase text-black">
              гишүүн болох
            </p>
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-5 flex w-[80%] items-center justify-center py-10 text-center text-[24px] xl:text-left">
        Хэрэв танд асуулт байвал гишүүдийн үйлчилгээ рүү имэйл илгээнэ үү:
        members@amnesty.mn
      </div>
    </div>
  );
}
