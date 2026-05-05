import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/layout/Navbar";
import LeadersMarquee from "@/sections/Leaders";
import Stats from "@/sections/Stats";

const Members = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative">
        {/* Global Background Pattern */}
        <div className="fixed inset-0 -z-10 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 2px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>
        
        <Navbar />
        {/* Very minimal spacer */}
        <div className="h-14 md:h-16" />
        <main className="container mx-auto px-4">
          <LeadersMarquee />
          <Stats />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Members;
