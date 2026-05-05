import { Target, Eye, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AboutCard from "./AboutCard";

const About = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Target, title: t("about_mission"), text: t("about_mission_text") },
    { icon: Eye, title: t("about_vision"), text: t("about_vision_text") },
    { icon: Clock, title: t("about_history"), text: t("about_history_text") },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
          {t("about_title")}
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-4 max-w-3xl mx-auto leading-relaxed">
          {t("about_p1")}
        </p>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("about_p2")}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
