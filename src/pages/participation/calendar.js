import Layout from "@/components/layout/Layout";
import CalendarDesktop from "@/components/participation/CalendarDesktop";
import CalendarMobile from "@/components/participation/CalendarMobile";

export default function Calendar() {
  return (
    <Layout>
      <CalendarDesktop />
      <CalendarMobile />
    </Layout>
  );
}
