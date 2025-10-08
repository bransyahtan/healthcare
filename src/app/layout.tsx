import { RootShell } from "@/components/layouts/RootShell";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Klinik Sehat Medika | Layanan Kesehatan Profesional",
  description:
    "Klinik Sehat Medika menyediakan layanan kesehatan lengkap dengan dokter dan spesialis profesional. Temukan lokasi kami dan dapatkan perawatan terbaik untuk Anda dan keluarga.",
  keywords: [
    "klinik",
    "dokter",
    "spesialis",
    "layanan kesehatan",
    "klinik jakarta",
    "pemeriksaan kesehatan",
    "laboratorium",
  ],
  authors: [{ name: "Klinik Sehat Medika" }],
  openGraph: {
    title: "Klinik Sehat Medika",
    description:
      "Klinik Sehat Medika — layanan kesehatan profesional untuk keluarga Anda.",
    url: "https://kliniksehatmedika.id",
    siteName: "Klinik Sehat Medika",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Klinik Sehat Medika",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
