import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
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

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Providers } from "@/components/providers/Providers";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { DeferredCustomCursor } from "@/components/ui/DeferredCustomCursor";
import { DeferredManifest } from "@/components/seo/DeferredManifest";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <StructuredData />
        <DeferredManifest />
        <SplashScreen />
        <DeferredCustomCursor />
        <Providers>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
