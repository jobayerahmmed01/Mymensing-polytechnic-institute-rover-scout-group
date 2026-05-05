import { useLanguage } from "@/contexts/LanguageContext";
import { leaders } from "@/data/siteData";

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

const LeadersMarquee = () => {
  const { t, lang } = useLanguage();
  const list = [...leaders, ...leaders];
  return (
    <section id="members" className="py-20 bg-secondary/40">
      <div className="container text-center mb-12">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">{t("leaders_sub")}</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t("leaders_title")}</h2>
      </div>
      <div className="relative overflow-hidden marquee-pause">
        <div className="flex gap-6 w-max scroll-marquee">
          {list.map((l, i) => {
            const name = lang === "bn" ? l.name_bn : l.name_en;
            const role = lang === "bn" ? l.role_bn : l.role_en;
            return (
              <div
                key={i}
                className="w-64 flex-shrink-0 bg-card rounded-2xl shadow-card p-6 text-center hover:-translate-y-2 transition-smooth"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-elegant">
                  {initials(l.name_en)}
                </div>
                <h3 className="font-bold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadersMarquee;
