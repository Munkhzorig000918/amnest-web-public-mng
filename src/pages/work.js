import Layout from "@/components/layout/Layout";
import WorkDesktop from "@/components/work/WorkDesktop";
import WorkMobile from "@/components/work/WorkMobile";

export default function Home() {
  return (
    <Layout>
      <WorkDesktop />
      <WorkMobile />
    </Layout>
  );
}
