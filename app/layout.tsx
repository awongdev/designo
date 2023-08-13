import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Designo",
  description:
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
