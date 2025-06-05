import Layout from "@/components/layout/Layout";
import YouthDesktop from "@/components/participation/YouthDesktop";
import YouthMobile from "@/components/participation/YouthMobile";

export default function Calendar() {
  return (
    <Layout>
      <YouthDesktop />
      <YouthMobile />
    </Layout>
  );
}
