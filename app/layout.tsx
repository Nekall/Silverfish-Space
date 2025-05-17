import type { Metadata } from "next";
import localFont from "next/font/local";

// Components
import Background from "@/components/background";
import Help from "@/components/help";
import Conditional from "@/components/conditional";

// Styles
import "./globals.css";

// Fonts
const minecraft = localFont({
  src: "../public/fonts/Minecraft-Seven_v2.ttf",
  variable: "--font-minecraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIS.exe",
  description: "Private Minecraft Server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${minecraft.variable}`}>
        <Help />
        {children}
        <Conditional>
          <Background />
        </Conditional>
      </body>
    </html>
  );
}
