import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import type { TranslationKey } from "@/data/translations";

interface ActivityCardProps {
  img: string;
  labelKey: TranslationKey;
}

const ActivityCard = ({ img, labelKey }: ActivityCardProps) => {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl aspect-[4/3] cursor-pointer border-4 border-white dark:border-slate-800"
    >
      {/* Loading Skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 animate-pulse" />
      )}
      
      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400">ছবি লোড হয়নি</p>
        </div>
      )}
      
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        src={img}
        alt={t(labelKey)}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className="w-full h-full object-cover"
        style={{ opacity: loaded ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 p-3 transform group-hover:translate-y-0 transition-transform duration-300"
      >
        <span className="inline-block px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[10px] font-semibold mb-1 shadow-lg">
          {t(labelKey)}
        </span>
        <h3 className="text-white font-bold text-sm group-hover:text-base transition-all duration-300">
          {t(labelKey)}
        </h3>
      </motion.div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default ActivityCard;
