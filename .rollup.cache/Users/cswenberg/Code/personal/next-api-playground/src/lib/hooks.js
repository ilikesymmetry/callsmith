import { useEffect, useState } from "react";
export function useTheme() {
    var _a = useState("light"), theme = _a[0], setTheme = _a[1];
    useEffect(function () {
        var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        var themeChangeHandler = function (e) {
            setTheme(e.matches ? "dark" : "light");
        };
        // Set initial theme
        setTheme(darkThemeMq.matches ? "dark" : "light");
        // Listen for changes to the preferred color scheme
        darkThemeMq.addEventListener("change", themeChangeHandler);
        // Cleanup event listener on component unmount
        return function () { return darkThemeMq.removeEventListener("change", themeChangeHandler); };
    }, []);
    return theme;
}
//# sourceMappingURL=hooks.js.map