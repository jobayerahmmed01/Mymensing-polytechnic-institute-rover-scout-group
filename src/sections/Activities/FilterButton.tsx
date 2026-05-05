import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/data/translations";

interface FilterButtonProps {
  labelKey: TranslationKey | "all";
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({ labelKey, isActive, onClick }: FilterButtonProps) => {
  const { t } = useLanguage();

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
        isActive
          ? "gradient-primary text-primary-foreground shadow-elegant"
          : "bg-card text-foreground hover:bg-muted"
      }`}
    >
      {t(labelKey as TranslationKey)}
    </button>
  );
};

export default FilterButton;
