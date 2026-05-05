import { Bell, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { notices } from "@/data/siteData";

const Notices = () => {
  const { t, lang } = useLanguage();
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">{t("notice_sub")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground flex items-center justify-center gap-3">
            <Bell className="w-8 h-8 text-primary" />
            {t("notice_title")}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {notices.map((n, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth border-l-4 border-primary flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:min-w-[140px]">
                <Calendar className="w-4 h-4" />
                {new Date(n.date).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-smooth">
                  {lang === "bn" ? n.title_bn : n.title_en}
                </h3>
                <p className="text-sm text-muted-foreground">{lang === "bn" ? n.body_bn : n.body_en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
