import type { Metadata } from "next";
import { Silkscreen, VT323, JetBrains_Mono, DM_Serif_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Tweaks from "@/components/Tweaks";
import "./globals.css";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mangelsdorf.au"),
  title: {
    default: "Daniel Mangelsdorf — CapyOS Portfolio",
    template: "%s — Daniel Mangelsdorf",
  },
  description:
    "I build AI systems that ship. RAG pipelines, autonomous agents, data platforms, and production web apps.",
  openGraph: {
    title: "Daniel Mangelsdorf — CapyOS Portfolio",
    description: "AI Solutions Engineer & Technical Pre-Sales",
    siteName: "Daniel Mangelsdorf",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Mangelsdorf",
    description: "AI Solutions Engineer & Technical Pre-Sales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${silkscreen.variable} ${vt323.variable} ${jetbrains.variable} ${dmSerif.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Tweaks />
      </body>
    </html>
  );
}
