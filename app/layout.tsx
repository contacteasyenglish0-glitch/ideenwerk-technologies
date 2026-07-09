import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideenwerk Technologies - L'excellence digitale en Afrique",
  description: "Nous créons des solutions technologiques innovantes pour les entreprises africaines. Sites web, applications mobiles et logiciels sur mesure pour tout le continent.",
  keywords: "développement web Afrique, application mobile, digitalisation, logiciel, tech Afrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}