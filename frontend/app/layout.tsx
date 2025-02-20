import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Space_Grotesk({
  weight:['300','400','500','600','700'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Smart Learning Hub",
  description: "E-Learning website using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        
        {children}
        
        <ScrollToTop />
      </body>
    </html>
  );
}
