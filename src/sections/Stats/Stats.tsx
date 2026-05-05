import { Users, UserCheck, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { stats } from "@/data/siteData";
import type { TranslationKey } from "@/data/translations";
import StatCard from "./StatCard";

const icons = [Users, UserCheck, GraduationCap, Calendar];

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {t("stats_title")}
        </h2>
        
        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.key}
              icon={icons[index]}
              value={stat.value}
              labelKey={stat.key as TranslationKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
