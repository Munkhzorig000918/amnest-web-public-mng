import Layout from "@/components/layout/Layout";
import StructureExecuteManagersDesktop from "@/components/about-us/structure/detail/StructureExecuteManagersDesktop";
import StructureExecuteManagersMobile from "@/components/about-us/structure/detail/StructureExecuteManagersMobile";

export default function StructureExecuteManagers() {
  return (
    <Layout>
      <StructureExecuteManagersDesktop />
      <StructureExecuteManagersMobile />
    </Layout>
  );
}
