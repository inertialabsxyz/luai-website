import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Inertia Labs | Trust Infrastructure for AI Agent Execution",
  description:
    "Luai is a deterministic execution layer for AI-generated workflows, with policy controls and audit-ready traces.",
  metadataBase: new URL("https://inertialabs.xyz"),
  openGraph: {
    title: "Inertia Labs | Trust Infrastructure for AI Agent Execution",
    description:
      "Luai — a deterministic execution layer for AI-generated workflows.",
    url: "https://inertialabs.xyz",
    siteName: "Inertia Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inertia Labs | Trust Infrastructure for AI Agent Execution",
    description:
      "Luai — a deterministic execution layer for AI-generated workflows.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
