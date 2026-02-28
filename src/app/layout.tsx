import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superior Homes (Qld) Pty Ltd | Building Queensland Homes Since 1996",
  description:
    "Family owned & operated Queensland builder since 1996. Colonial, Modern & Mediterranean style homes from Brisbane to Gympie. HIA Member since 1997.",
  keywords:
    "home builder Queensland, new homes Brisbane, Gympie builder, colonial homes, mediterranean homes, superior homes",
  openGraph: {
    title: "Superior Homes (Qld) Pty Ltd",
    description: "Family owned & operated Queensland builder since 1996.",
    url: "https://superiorhomesqld.com.au",
    siteName: "Superior Homes (Qld) Pty Ltd",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
