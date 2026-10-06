// app/page.tsx
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { Services } from "@/components/services/Services";
import { Experience } from "@/components/experience/Experience";
import { About } from "@/components/about/About";
import { ContactCTA } from "@/components/contact/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Services />
      <Experience />
      <About />
      <ContactCTA />
    </main>
  );
}