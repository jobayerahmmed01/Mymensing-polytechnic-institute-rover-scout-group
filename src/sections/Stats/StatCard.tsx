import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/data/translations";
import Counter from "./Counter";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  labelKey: TranslationKey;
}

const StatCard = ({ icon: Icon, value, labelKey }: StatCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth border border-border">
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        <Counter end={value} />+
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {t(labelKey)}
      </div>
    </div>
  );
};

export default StatCard;
