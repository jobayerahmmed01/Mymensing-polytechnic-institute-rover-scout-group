import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
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
    <section className="py-6 md:py-8 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden rounded-3xl">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("activities_title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
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
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={`${activity.key}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ActivityCard
                img={activity.img}
                labelKey={activity.key as TranslationKey}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
