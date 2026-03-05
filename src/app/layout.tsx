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
    default: "Danny Mangelsdorf — AI Solutions Engineer",
    template: "%s — Danny Mangelsdorf",
  },
  description:
    "I build AI systems that ship. RAG pipelines, autonomous agents, data platforms, and production web apps.",
  openGraph: {
    title: "Danny Mangelsdorf",
    description: "AI Solutions Engineer & Full-Stack Developer",
    siteName: "Danny Mangelsdorf",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny Mangelsdorf",
    description: "AI Solutions Engineer & Full-Stack Developer",
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
