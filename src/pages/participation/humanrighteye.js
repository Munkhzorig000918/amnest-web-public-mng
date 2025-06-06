import Layout from "@/components/layout/Layout";
import EyeDesktop from "@/components/participation/eye/EyeDesktop";
import EyeMobile from "@/components/participation/eye/EyeMobile";

export default function Volunteer() {
  return (
    <Layout>
      <EyeDesktop />
      <EyeMobile />
    </Layout>
  );
}
