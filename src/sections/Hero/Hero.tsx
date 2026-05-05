import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import hero from "@/assets/hero-scouts.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="Rover scouts standing together"
        width={1920}
        height={1088}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="container relative z-10 text-center text-primary-foreground py-24 md:py-32">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-semibold rounded-full bg-accent/90 text-accent-foreground tracking-wider animate-fade-in-up">
          {t("hero_tagline")}
        </span>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {t("hero_title")}
        </h1>
        <p
          className="text-base md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero_sub")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="gradient-primary shadow-elegant hover:scale-105 transition-smooth">
            {t("hero_cta")}
          </Button>
          <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur border-primary-foreground/40 text-primary-foreground hover:bg-background/20" asChild>
            <a href="#activities">{t("hero_cta2")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
