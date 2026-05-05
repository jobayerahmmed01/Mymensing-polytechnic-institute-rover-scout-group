import { Bell, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { notices } from "@/data/siteData";

const Notices = () => {
  const { t, lang } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
            {t("notice_sub")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Bell className="w-8 h-8 text-primary" />
            </motion.div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("notice_title")}
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {notices.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 10 }}
              className="group bg-card rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary hover:border-accent flex flex-col md:flex-row md:items-center gap-4 cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground md:min-w-[140px] relative z-10">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">
                  {new Date(n.date).toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  {lang === "bn" ? n.title_bn : n.title_en}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "bn" ? n.body_bn : n.body_en}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notices;
