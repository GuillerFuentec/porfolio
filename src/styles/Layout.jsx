import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { inter } from "@/hook/Font";

export default function Layout({ children, theme, toggleTheme }) {
  return (
    <div
      id="root"
      className={`${inter.className}`}
      data-theme={theme}
    >
      <div className="layout shadow-2xl pt-6">
        <HeaderNav toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
