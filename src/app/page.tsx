import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Momentum } from "@/components/sections/Momentum";
import { Features } from "@/components/sections/Features";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { Workflow } from "@/components/sections/Workflow";
import { LeadPipeline } from "@/components/sections/LeadPipeline";
import { StructuredResponse } from "@/components/sections/StructuredResponse";
import { Deployment } from "@/components/sections/Deployment";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Relay Estate | Premium Real Estate Lead Automation",
  description: "Scale your real estate lead pipeline with Aura's Relay Estate. Premium automation for high-performance teams.",
};

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Momentum />
      <Features />
      <DashboardShowcase />
      <Workflow />
      <LeadPipeline />
      <StructuredResponse />
      <Deployment />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

