import { Users, UserCheck, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { stats } from "@/data/siteData";
import type { TranslationKey } from "@/data/translations";
import StatCard from "./StatCard";

const icons = [Users, UserCheck, GraduationCap, Calendar];

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("stats_title")}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard
                icon={icons[index]}
                value={stat.value}
                labelKey={stat.key as TranslationKey}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
