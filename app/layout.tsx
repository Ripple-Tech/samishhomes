import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import InstallPrompt from "@/components/InstallPrompt";
import ClientBody from "./ClientBody";

// Modern Sans-serif for UI
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Luxurious Serif for Headings
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samish Homes and Apartments — Premium Real Estate in Abuja",
  description:
    "Samish Homes and Apartments — Discover premium residential properties across Abuja's finest locations. Terrace duplexes, luxury villas and master-planned estates.",
  metadataBase: new URL("https://samishhomes.vercel.app"),
   themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0B1C2D" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1C2D" },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Samish Homes and Apartments",
    description:
      "Premium residential properties across Abuja — Hillcity Residence, Guzape, Karsana and more. Quality construction, secure communities, flexible payment plans.",
    url: "https://samishhomes.vercel.app",
    siteName: "Samish Homes and Apartments",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Samish Homes - Premium Real Estate in Abuja",
      },
      // fallback
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Samish Homes Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samish Homes and Apartments",
    description:
      "Discover premium residential properties across Abuja. Terrace duplexes, luxury villas, and secure gated communities.",
    images: ["/logo.jpg", "/android-chrome-512x512.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        eb_garamond.variable,
        geistSans.variable,
        geistMono.variable,
        "scroll-smooth"
      )}
    >
        <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          {children}
           <InstallPrompt />
        </ClientBody>
      </body>
    </html>
  );
}