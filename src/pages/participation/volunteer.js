import Layout from "@/components/layout/Layout";
import VolunteerDesktop from "@/components/participation/VolunteerDesktop";
import VolunteerMobile from "@/components/participation/VolunteerMobile";

export default function Volunteer() {
  return (
    <Layout>
      <VolunteerDesktop />
      <VolunteerMobile />
    </Layout>
  );
}
