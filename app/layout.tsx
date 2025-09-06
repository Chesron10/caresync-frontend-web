import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { QueryProvider } from "@/components/QueryProvider";

const poppins = localFont({
  src: [
    { path: "/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "/fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "/fonts/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CareSync",
  description:
    "CareSync is an online medical platform that bridges the gap between doctors and patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
