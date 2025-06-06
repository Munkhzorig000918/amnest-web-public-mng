import Layout from "@/components/layout/Layout";
import DonationDesktop from "@/components/donation/DonationDesktop";
import DonationMobile from "@/components/donation/DonationMobile";

export default function Home() {
  return (
    <Layout>
      <DonationDesktop />
      <DonationMobile />
    </Layout>
  );
}
