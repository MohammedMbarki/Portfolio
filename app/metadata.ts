// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mohamed Mbarki | Portfolio",
  description: "Full Stack Developer & Machine Learning Enthusiast",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/logo.svg", type: "image/svg" },
  },
};