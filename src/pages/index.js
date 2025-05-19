import Layout from "@/components/layout/Layout";
import HomeDesktop from "@/components/home/HomeDesktop";
import HomeMobile from "@/components/home/HomeMobile";

export default function Home() {
  return (
    <Layout>
      <HomeDesktop />
      <HomeMobile />
    </Layout>
  );
}
