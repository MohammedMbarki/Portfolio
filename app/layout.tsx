import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: " Mohamed Mbarki| Full Stack Developer",
  description: "Full Stack Developer & Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
  metadataBase: new URL("https://mohamedmbarki.netlify.app"),
  
  // Basic metadata
  applicationName: "Mohamed Mbarki Portfolio",
  authors: [{ name: "Mohamed Mbarki " }],
  keywords: ["Full Stack Developer","Next.js", "React", "aws"],
  
  openGraph: {
    type: "website",
    url: "https://mohamedmbarki.netlify.app/",
    title: " Mohamed Mbarki| Full Stack Developer",
    description: "Full Stack Developer & Blockchain and Machine Learning Enthusiast with expertise in Next.js, React, and blockchain technologies.",
    siteName: "Mohamed Mbarki",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Mbarki - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://mohamedmbarki.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}