import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl border border-border/50 hover:border-primary/50 group relative overflow-hidden"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center shadow-lg relative z-10 group-hover:shadow-xl"
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </motion.div>
      
      {/* Counter */}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 relative z-10">
        <Counter end={value} />+
      </div>
      
      {/* Label */}
      <div className="text-sm md:text-base text-muted-foreground font-medium relative z-10 group-hover:text-foreground transition-colors">
        {t(labelKey)}
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default StatCard;
