import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoTrack — Pemantauan Energi & Lingkungan Kampus",
  description: "Platform pemantauan energi terbarukan dan keberlanjutan lingkungan kampus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader
          namaProduk="EcoTrack"
          tautan={[
            { href: "/", label: "Beranda" },
            { href: "/katalog", label: "Katalog" },
          ]}
        />
        <div className="flex-1">{children}</div>
        <SiteFooter namaProduk="EcoTrack" />
      </body>
    </html>
  );
}

