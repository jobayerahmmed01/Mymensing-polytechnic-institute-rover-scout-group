import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "✓", description: t("contact_send") + " ✓" });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-2">{t("contact_sub")}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">{t("contact_title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: MapPin, label: t("contact_address"), value: t("contact_address_text") },
              { icon: Phone, label: t("contact_phone"), value: "+880 1XXX-XXXXXX" },
              { icon: Mail, label: t("contact_email_label"), value: "info@mprsg.org" },
            ].map((it) => (
              <div key={it.label} className="flex gap-4 items-start bg-card p-5 rounded-xl shadow-card">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <it.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{it.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{it.value}</div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="bg-card p-6 md:p-8 rounded-2xl shadow-card space-y-4 border border-border">
            <div>
              <Label htmlFor="name">{t("contact_name")}</Label>
              <Input id="name" required maxLength={100} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">{t("contact_email")}</Label>
              <Input id="email" type="email" required maxLength={255} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message">{t("contact_message")}</Label>
              <Textarea id="message" required maxLength={1000} rows={5} className="mt-1" />
            </div>
            <Button type="submit" size="lg" className="w-full gradient-primary shadow-elegant">
              {t("contact_send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
