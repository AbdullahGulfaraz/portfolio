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
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: "Personal portfolio showcasing full-stack web applications, Flutter mobile apps, and business automations.",
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: "Full-Stack Development, Mobile Applications & Business Automation Pipelines.",
    type: "website",
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