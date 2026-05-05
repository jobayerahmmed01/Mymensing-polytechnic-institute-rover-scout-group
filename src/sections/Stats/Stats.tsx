import { Users, UserCheck, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { stats } from "@/data/siteData";
import type { TranslationKey } from "@/data/translations";
import StatCard from "./StatCard";

const icons = [Users, UserCheck, GraduationCap, Calendar];

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t("stats_title")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
