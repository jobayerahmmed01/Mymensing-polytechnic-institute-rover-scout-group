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
    <div className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-md border border-border/50 h-full flex flex-col justify-center">
      {/* Icon */}
      <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-lg md:rounded-xl gradient-primary flex items-center justify-center shadow-md">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
      </div>
      
      {/* Counter or Placeholder */}
      {value === 0 ? (
        <div className="text-sm md:text-base font-semibold text-muted-foreground mb-1 md:mb-2 px-2">
          ডাটা যুক্ত করা হয়নি
        </div>
      ) : (
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1 md:mb-2">
          <Counter end={value} />+
        </div>
      )}
      
      {/* Label */}
      <div className="text-xs md:text-sm text-muted-foreground font-medium">
        {t(labelKey)}
      </div>
    </div>
  );
};

export default StatCard;
