import Layout from "@/components/layout/Layout";
import EventsDesktop from "@/components/participation/events/EventsDesktop";
import EventsMobile from "@/components/participation/events/EventsMobile";

export default function Calendar() {
  return (
    <Layout>
      <EventsDesktop />
      <EventsMobile />
    </Layout>
  );
}
