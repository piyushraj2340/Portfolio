import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { Providers } from "@/components/providers/Providers";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { DeferredCustomCursor } from "@/components/ui/DeferredCustomCursor";
import { DeferredManifest } from "@/components/seo/DeferredManifest";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        <StructuredData />
        <DeferredManifest />
        <SplashScreen />
        <DeferredCustomCursor />
        <ScrollToTopButton />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
