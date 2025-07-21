import Image from "next/image";
import Link from "next/link";
import BannerSlider from "@/components/common/BannerSlider";
import { bannerImages } from "@/constants/bannerImages";

export default function StructureChapterMembersMobile() {
  return (
    <div className="w-full block sm:hidden">
      <div className="relative w-full h-[40vh]">
        <BannerSlider images={bannerImages} width="90rem" />
      </div>

      <div className="mx-auto p-4 text-[18px]">
        <h4 className="py-2 text-[24px] font-semibold">
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

      <div className="mx-auto p-4">
        <div className="flex flex-col gap-4">
          <div className="w-full rounded-[8px] border border-solid border-gray-700">
            <div className="relative h-[200px] w-full">
              <Image
                src="/images/aboutSub1/chapter/ZaluuchuudBulegFront.png"
                alt="Залуучуудын бүлэг"
                fill
                className="object-cover rounded-t-[8px]"
              />
            </div>
            <Link
              href="/participation/youthhumanrights"
              className="mx-auto flex justify-center border-t-2 border-black p-4 text-[18px]"
            >
              ЗАЛУУЧУУДЫН БҮЛЭГ
            </Link>
          </div>

          <div className="w-full rounded-[8px] border border-solid border-gray-700">
            <div className="relative h-[200px] w-full">
              <Image
                src="/images/aboutSub1/chapter/mergejilten.png"
                alt="Мэргэжилтнүүдийн бүлэг"
                fill
                className="object-cover rounded-t-[8px]"
              />
            </div>
            <div className="mx-auto flex justify-center border-t-2 border-black p-4 text-[18px]">
              МЭРГЭЖИЛТНҮҮДИЙН БҮЛЭГ
            </div>
          </div>

          <div className="w-full rounded-[8px] border border-solid border-gray-700">
            <div className="relative h-[200px] w-full">
              <Image
                src="/images/aboutSub1/chapter/gazriinremovebg-preview.png"
                alt="Орон нутгийн бүлэг"
                fill
                className="object-cover rounded-t-[8px]"
              />
            </div>
            <Link
              href="#oronnutag"
              className="mx-auto flex justify-center border-t-2 border-black p-4 text-[18px]"
            >
              ОРОН НУТГИЙН БҮЛЭГ
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center" id="oronnutag">
        <h3 className="h-[60px] items-center text-center text-[24px]">
          ОРОН НУТГИЙН БҮЛЭГ
        </h3>
        <div className="relative w-full h-[300px] px-4">
          <Image
            src="/images/aboutSub1/chapter/gazriinremovebg-preview.png"
            alt="Монгол улсын газрын зураг"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div>
        <h4 className="mx-auto flex justify-center p-4 pt-8 text-center text-[24px]">
          Монголын Эмнести Интернэшнлийн дэмжигч болон гишүүнийн ялгаа нь юу вэ?
        </h4>
      </div>

      <div className="mx-auto w-full pb-10 px-4">
        <div className="flex flex-col justify-center">
          <h4 className="flex py-2 text-[24px]">ДЭМЖИГЧ</h4>
          <p className="text-justify text-[16px]">
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
            className="mx-auto my-5 flex h-[50px] w-[200px] rounded-[5px] border border-gray-500 bg-[#fdff28] shadow-2xl"
          >
            <p className="mx-auto my-auto flex rounded-[15px] uppercase text-black text-[14px]">
              активизмд оролцох
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-center mt-8">
          <h4 className="flex py-2 text-[24px]">ГИШҮҮН</h4>
          <p className="text-justify text-[16px]">
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
            className="mx-auto my-5 flex h-[50px] w-[200px] rounded-[5px] border border-gray-500 bg-[#fdff28] shadow-2xl"
          >
            <p className="mx-auto my-auto flex rounded-[15px] uppercase text-black text-[14px]">
              гишүүн болох
            </p>
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-5 flex w-full items-center justify-center py-10 text-center text-[18px] px-4">
        Хэрэв танд асуулт байвал гишүүдийн үйлчилгээ рүү имэйл илгээнэ үү:
        members@amnesty.mn
      </div>
    </div>
  );
}
