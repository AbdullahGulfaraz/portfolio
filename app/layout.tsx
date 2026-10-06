// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: "Personal portfolio showcasing full-stack web applications, Flutter mobile apps, and business automations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageContainer>
          <Header />
          {children}
          <Footer />
        </PageContainer>
      </body>
    </html>
  );
}