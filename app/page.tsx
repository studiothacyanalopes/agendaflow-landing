import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/PainPoints";
import Features from "@/components/sections/Features";
import Demo from "@/components/sections/Demo";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Demo />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}