// Hooks || Custom hooks
import useTheme from "@/hook/theme";

// Components
import Layout from "@/styles/Layout";
import Hero from "@/components/Hero";
import BodyWorks from "@/components/BodyWorks";
import BodyBlogging from "@/components/BodyBlogging";

export default function Home() {
  const [theme, toggleTheme] = useTheme();
  return (
    <Layout
      theme={theme}
      toggleTheme={toggleTheme}
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
