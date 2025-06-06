import Layout from "@/components/layout/Layout";
import VolunteerDesktop from "@/components/participation/volunteer/VolunteerDesktop";
import VolunteerMobile from "@/components/participation/volunteer/VolunteerMobile";

export default function Volunteer() {
  return (
    <Layout>
      <VolunteerDesktop />
      <VolunteerMobile />
    </Layout>
  );
}
