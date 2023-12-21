import "./globals.css";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XERO BIT TECHNOLOGY",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
