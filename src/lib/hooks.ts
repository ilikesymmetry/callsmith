import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    const themeChangeHandler = (e: any) => {
      setTheme(e.matches ? "dark" : "light");
    };

    // Set initial theme
    setTheme(darkThemeMq.matches ? "dark" : "light");

    // Listen for changes to the preferred color scheme
    darkThemeMq.addEventListener("change", themeChangeHandler);

    // Cleanup event listener on component unmount
    return () => darkThemeMq.removeEventListener("change", themeChangeHandler);
  }, []);

  return theme;
}
