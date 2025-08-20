import Layout from "@/components/layout/Layout";
import WriteForRightsDesktop from "@/components/campaign/writeforrights/WriteForRightsDesktop";
import WriteForRightsMobile from "@/components/campaign/writeforrights/WriteForRightsMobile";

export default function WriteForRights() {
  return (
    <Layout>
      <WriteForRightsDesktop />
      <WriteForRightsMobile />
    </Layout>
  );
}
