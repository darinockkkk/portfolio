import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daryna Darii | Software Developer & Product Analyst",
  description:
    "Portfolio of Daryna Darii - Software Developer & Product Analyst passionate about building intelligent, user-focused digital products with AI, React Native, and modern web technologies.",
  keywords: [
    "Daryna Darii",
    "Software Developer",
    "Product Analyst",
    "React Native",
    "Full Stack Developer",
    "AI Integration",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Daryna Darii" }],
  creator: "Daryna Darii",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daryna-darii.vercel.app",
    title: "Daryna Darii | Software Developer & Product Analyst",
    description:
      "Portfolio of Daryna Darii - Building intelligent, user-focused digital products.",
    siteName: "Daryna Darii Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daryna Darii | Software Developer & Product Analyst",
    description:
      "Portfolio of Daryna Darii - Building intelligent, user-focused digital products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
