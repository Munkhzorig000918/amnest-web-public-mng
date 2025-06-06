import Layout from "@/components/layout/Layout";
import HistoryDesktop from "@/components/about-us/HistoryDesktop";
import HistoryMobile from "@/components/about-us/HistoryMobile";

export default function Home() {
  return (
    <Layout>
      <HistoryDesktop />
      <HistoryMobile />
    </Layout>
  );
}
