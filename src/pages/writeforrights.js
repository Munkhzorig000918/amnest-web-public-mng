import Layout from "@/components/layout/Layout";
import WriteForRightsDesktop from "@/components/writeforrights/WriteForRightsDesktop";
import WriteForRightsMobile from "@/components/writeforrights/WriteForRightsMobile";

export default function WriteForRights() {
  return (
    <Layout>
      <WriteForRightsDesktop />
      <WriteForRightsMobile />
    </Layout>
  );
}
