import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/shared/TypewriterText";
import heroImage from "@/assets/hero-scouts.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12 md:pb-16">
      {/* Background Image - No animation for performance */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rover scouts standing together"
          width={1920}
          height={1088}
          className="w-full h-full object-cover blur-[1px]"
        />
      </div>
      
      {/* Dark Overlay - Static for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80" />

      {/* Content - No heavy animations */}
      <div className="container relative z-10 text-center text-white px-4 md:px-6 mt-12 md:mt-16">
        {/* Motto - Fixed height to prevent jumping */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-16 md:mb-20 leading-tight max-w-5xl mx-auto min-h-[120px] md:min-h-[180px] lg:min-h-[240px] flex items-center justify-center">
          <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            <TypewriterText text={t("hero_motto")} delay={60} loop={true} pauseDelay={3000} />
          </span>
        </h1>
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 mb-8 md:mb-10 text-xs md:text-base font-bold rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 dark:from-emerald-500 dark:to-amber-500 backdrop-blur-sm shadow-2xl border-2 border-white/40">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
          <span className="drop-shadow-lg">{t("hero_tagline")}</span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        
        {/* Buttons - Simple CSS hover */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-200 group relative overflow-hidden border-2 border-white/30 active:scale-95"
            asChild
          >
            <a href="/student-login">
              <span className="relative z-10 flex items-center">
                {t("hero_cta")}
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/20 backdrop-blur-md border-2 border-white/60 text-white font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:bg-white/30 transition-all duration-200 shadow-2xl hover:shadow-white/30 relative overflow-hidden group active:scale-95" 
            asChild
          >
            <a href="/activities">
              <span className="relative z-10">{t("hero_cta2")}</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
