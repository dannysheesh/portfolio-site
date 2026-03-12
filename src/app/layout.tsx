import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mangelsdorf.au"),
  title: {
    default: "Daniel Mangelsdorf — AI Solutions Engineer",
    template: "%s — Daniel Mangelsdorf",
  },
  description:
    "I build AI systems that ship. RAG pipelines, autonomous agents, data platforms, and production web apps.",
  openGraph: {
    title: "Daniel Mangelsdorf",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
