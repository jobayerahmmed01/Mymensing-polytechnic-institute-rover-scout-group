import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { activities } from "@/data/siteData";
import type { TranslationKey } from "@/data/translations";
import ActivityCard from "./ActivityCard";
import FilterButton from "./FilterButton";

const categories: TranslationKey[] = ["cat_camping", "cat_social", "cat_training", "cat_events"];

const Activities = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<TranslationKey | "all">("all");

  const filteredActivities = activeFilter === "all" 
    ? activities 
    : activities.filter((activity) => activity.key === activeFilter);

  return (
    <section id="activities" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
            {t("activities_sub")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("activities_title")}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <FilterButton
            labelKey="view_all"
            isActive={activeFilter === "all"}
            onClick={() => setActiveFilter("all")}
          />
          {categories.map((category) => (
            <FilterButton
              key={category}
              labelKey={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={index}
              img={activity.img}
              labelKey={activity.key as TranslationKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
