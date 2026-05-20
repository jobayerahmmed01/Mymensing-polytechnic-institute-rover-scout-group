import { useLanguage } from "@/contexts/LanguageContext";
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
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl aspect-[4/3] cursor-pointer border-4 border-white dark:border-slate-800 hover:-translate-y-2 transition-transform duration-200">
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
      
      <img
        src={img}
        alt={t(labelKey)}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        style={{ opacity: loaded ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <span className="inline-block px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[10px] font-semibold mb-1 shadow-lg">
          {t(labelKey)}
        </span>
        <h3 className="text-white font-bold text-sm group-hover:text-base transition-all duration-200">
          {t(labelKey)}
        </h3>
      </div>
    </div>
  );
};

export default ActivityCard;
