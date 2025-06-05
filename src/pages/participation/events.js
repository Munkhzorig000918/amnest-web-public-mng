import Layout from "@/components/layout/Layout";
import EventsDesktop from "@/components/participation/EventsDesktop";
import EventsMobile from "@/components/participation/EventsMobile";

export default function Calendar() {
  return (
    <Layout>
      <EventsDesktop />
      <EventsMobile />
    </Layout>
  );
}
