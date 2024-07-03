// Components
import Layout from "@/styles/Layout";
import Hero from "@/components/Hero";
import BodyWorks from "@/components/BodyWorks";
import BodyBlogging from "@/components/BodyBlogging";

export default function Home() {
  return (
    <Layout
      className="layout shadow-2xl pt-6"
    >
      <main>
        <Hero />
        <BodyWorks />
        <BodyBlogging />
      </main>
    </Layout>
  );
}
