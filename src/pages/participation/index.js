import Layout from "@/components/layout/Layout";
import ParticipationDesktop from "@/components/participation/ParticipationDesktop";
import ParticipationMobile from "@/components/participation/ParticipationMobile";

export default function Home() {
  return (
    <Layout>
      <ParticipationDesktop />
      <ParticipationMobile />
    </Layout>
  );
}
