import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import Hero from "@/sections/Hero";
import LeadersMarquee from "@/sections/Leaders";
import Stats from "@/sections/Stats";
import Activities from "@/sections/Activities";
import Notices from "@/sections/Notices";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <LeadersMarquee />
          <Stats />
          <Activities />
          <Notices />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
