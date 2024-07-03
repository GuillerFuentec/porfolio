// Layout.js
import React from "react";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import { inter } from "@/hook/Font";
import { useTheme } from "@/hook/context_theme"; // Importa useTheme

export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme(); // Usa useTheme para obtener theme y toggleTheme

  return (
    <div id="root" className={`${inter.className}`} data-theme={theme}>
      <div className="layout shadow-2xl pt-6">
        <HeaderNav toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
