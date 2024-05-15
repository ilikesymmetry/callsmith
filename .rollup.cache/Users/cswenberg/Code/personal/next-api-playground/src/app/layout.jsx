import { Inter } from "next/font/google";
import "./globals.css";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "Callsmith",
    description: "Generated API playground for NextJS",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#000000"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>);
}
//# sourceMappingURL=layout.jsx.map