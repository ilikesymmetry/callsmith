import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Callsmith",
    description: "Generated API playground for NextJS",
};
export default function RootLayout({ children, }) {
    return (<html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#000000"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>);
}
//# sourceMappingURL=layout.jsx.map