import Layout from "@/components/layout/Layout";
import NewsDesktop from "@/components/news/NewsDesktop";
import NewsMobile from "@/components/news/NewsMobile";

export default function Home() {
  return (
    <Layout>
      <NewsDesktop />
      <NewsMobile />
    </Layout>
  );
}
