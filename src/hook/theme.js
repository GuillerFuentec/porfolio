// hooks/useTheme.js
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dracula");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dracula";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dracula" ? "light" : "dracula");
  };

  return [theme, toggleTheme];
};

export default useTheme;
