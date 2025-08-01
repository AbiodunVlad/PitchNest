import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviderWrapper from "@/components/ui/ThemeProviderWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PitchNest - Where Startups Meet Investors",
  description:
    "Join the premier platform connecting innovative startups with strategic investors. Streamline your fundraising journey with AI-powered matching and integrated communication tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}