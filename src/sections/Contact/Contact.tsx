import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "✓", description: t("contact_send") + " ✓" });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-6 md:py-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden rounded-3xl">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">
            {t("contact_sub")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("contact_title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, label: t("contact_address"), value: t("contact_address_text") },
              { icon: Phone, label: t("contact_phone"), value: "+880 1XXX-XXXXXX" },
              { icon: Mail, label: t("contact_email_label"), value: "info@mprsg.org" },
            ].map((it, idx) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex gap-4 items-start bg-card p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <it.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {it.label}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {it.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border border-border/50 space-y-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <Label htmlFor="name" className="text-foreground font-medium">
                {t("contact_name")}
              </Label>
              <Input
                id="name"
                required
                maxLength={100}
                className="mt-1 focus:ring-2 focus:ring-primary transition-all"
                placeholder={t("contact_name")}
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground font-medium">
                {t("contact_email")}
              </Label>
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                className="mt-1 focus:ring-2 focus:ring-primary transition-all"
                placeholder={t("contact_email")}
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground font-medium">
                {t("contact_message")}
              </Label>
              <Textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                className="mt-1 focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder={t("contact_message")}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full gradient-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              {t("contact_send")}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
