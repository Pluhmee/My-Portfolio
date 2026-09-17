import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("pv2-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pv2-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((p) => (p === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
};
