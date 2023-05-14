import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import Header from "../components/ui/header";
import Footer from "../components/ui/footer";

const uncutsans = localFont({
  src: [
    {
      path: "../public/fonts/Uncut-Sans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Uncut-Sans-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/Uncut-Sans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Uncut-Sans-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-uncut-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} ${uncutsans.variable} font-inter bg-gray-900 tracking-tight text-gray-100 antialiased`}
    >
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
}
