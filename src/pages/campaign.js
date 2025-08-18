import Layout from "@/components/layout/Layout";
import CampaignDesktop from "@/components/campaign/CampaignDesktop";
import CampaignMobile from "@/components/campaign/CampaignMobile";

export default function Campaign() {
  return (
    <Layout>
      <CampaignDesktop />
      <CampaignMobile />
    </Layout>
  );
}
