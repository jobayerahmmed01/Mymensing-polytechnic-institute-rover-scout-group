import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
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
      
      {/* Simple Orbs - Reduced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/10 dark:bg-emerald-400/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-amber-500/10 dark:bg-amber-400/15 rounded-full blur-3xl"
        />
      </div>

      {/* Content - Simplified animations - Motto moved up */}
      <div className="container relative z-10 text-center text-white px-4 md:px-6 mt-12 md:mt-16">
        {/* Motto - Simple fade in - Fixed height to prevent jumping */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-7xl font-black mb-16 md:mb-20 leading-tight max-w-5xl mx-auto min-h-[120px] md:min-h-[180px] lg:min-h-[240px] flex items-center justify-center"
        >
          <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            <TypewriterText text={t("hero_motto")} delay={60} loop={true} pauseDelay={3000} />
          </span>
        </motion.h1>
        
        {/* Tagline - Simple fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 mb-8 md:mb-10 text-xs md:text-base font-bold rounded-full bg-gradient-to-r from-emerald-600 to-amber-600 dark:from-emerald-500 dark:to-amber-500 backdrop-blur-sm shadow-2xl border-2 border-white/40"
        >
          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
          <span className="drop-shadow-lg">{t("hero_tagline")}</span>
          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
        </motion.div>
        
        {/* Buttons - Simple fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 group relative overflow-hidden border-2 border-white/30"
              asChild
            >
              <a href="/student-login">
                <span className="relative z-10 flex items-center">
                  {t("hero_cta")}
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/20 backdrop-blur-md border-2 border-white/60 text-white font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-white/30 relative overflow-hidden group" 
              asChild
            >
              <a href="/activities">
                <span className="relative z-10">{t("hero_cta2")}</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
