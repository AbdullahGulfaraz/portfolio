// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahgulfaraz-portfolio.vercel.app"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    url: "https://abdullahgulfaraz-portfolio.vercel.app",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og.png", // Next.js automatically resolves this against metadataBase
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/images/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <PageContainer>
              <Header />
              {children}
              <Footer />
            </PageContainer>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}