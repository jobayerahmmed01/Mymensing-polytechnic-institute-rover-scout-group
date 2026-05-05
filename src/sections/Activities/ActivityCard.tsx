import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/data/translations";

interface ActivityCardProps {
  img: string;
  labelKey: TranslationKey;
}

const ActivityCard = ({ img, labelKey }: ActivityCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/3] cursor-pointer">
      <img
        src={img}
        alt={t(labelKey)}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-2">
          {t(labelKey)}
        </span>
        <h3 className="text-background font-bold text-lg">{t(labelKey)}</h3>
      </div>
    </div>
  );
};

export default ActivityCard;
