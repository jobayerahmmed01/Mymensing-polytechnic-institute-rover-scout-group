import { Target, Eye, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";

const About = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Target, title: t("about_mission"), text: t("about_mission_text") },
    { icon: Eye, title: t("about_vision"), text: t("about_vision_text") },
    { icon: Clock, title: t("about_history"), text: t("about_history_text") },
  ];

  return (
    <section className="py-6 md:py-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("about_title")}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            {t("about_p1")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t("about_p2")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <AboutCard
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
