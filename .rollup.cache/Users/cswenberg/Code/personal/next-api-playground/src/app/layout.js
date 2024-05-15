import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Inter } from "next/font/google";
import "./globals.css";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "Callsmith",
    description: "Generated API playground for NextJS",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (_jsxs("html", { lang: "en", children: [_jsxs("head", { children: [_jsx("meta", { name: "msapplication-TileColor", content: "#000000" }), _jsx("meta", { name: "theme-color", content: "#000000" })] }), _jsx("body", { className: inter.className, children: children })] }));
}
//# sourceMappingURL=layout.js.map