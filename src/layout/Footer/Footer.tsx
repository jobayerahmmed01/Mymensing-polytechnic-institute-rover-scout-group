import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" width={40} height={40} className="w-10 h-10 bg-background/10 rounded-full p-1" />
            <div>
              <div className="font-bold">{t("siteShort")}</div>
              <div className="text-xs opacity-80">{t("siteName")}</div>
            </div>
          </div>
          <div className="text-sm opacity-90 text-center">
            © {new Date().getFullYear()} {t("siteShort")}. {t("footer_rights")}
          </div>
          <div className="text-xs opacity-80 flex items-center gap-1">
            {t("footer_made")} <Heart className="w-3 h-3 fill-accent text-accent" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
