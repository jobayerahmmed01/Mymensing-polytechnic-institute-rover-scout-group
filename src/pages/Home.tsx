import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";

const Home = () => {
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
        <main>
          <Hero />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Home;
