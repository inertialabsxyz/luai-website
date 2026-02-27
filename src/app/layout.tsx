import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Inertia labs | Trust Infrastructure for AI Agent Execution",
  description:
    "Luai is a deterministic execution layer for AI-generated workflows, with policy controls and audit-ready traces.",
  metadataBase: new URL("https://inertialabs.xyz"),
  openGraph: {
    title: "Inertia labs | Trust Infrastructure for AI Agent Execution",
    description:
      "Luai — a deterministic execution layer for AI-generated workflows.",
    url: "https://inertialabs.xyz",
    siteName: "Inertia labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inertia labs | Trust Infrastructure for AI Agent Execution",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
