import Layout from "@/components/layout/Layout";
import HistoryDesktop from "@/components/about-us/HistoryDesktop";
import HistoryMobile from "@/components/about-us/HistoryMobile";

export default function History() {
  return (
    <Layout>
      <HistoryDesktop />
      <HistoryMobile />
    </Layout>
  );
}
