import { Heart, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="logo" 
                width={50} 
                height={50} 
                className="w-12 h-12 bg-white/10 rounded-full p-2" 
              />
              <div>
                <div className="font-bold text-lg">{t("siteShort")}</div>
                <div className="text-xs opacity-90">{t("siteName")}</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t("hero_sub")}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#home", label: t("nav_home") },
                { href: "#activities", label: t("nav_activities") },
                { href: "#about", label: t("nav_about") },
                { href: "#contact", label: t("nav_contact") },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 inline-block transform duration-200"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">{t("contact_title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t("contact_address_text")}</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@mprsg.org</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm opacity-90 text-center md:text-left">
            © {new Date().getFullYear()} {t("siteShort")}. {t("footer_rights")}
          </div>
          <div className="text-xs opacity-80 flex items-center gap-1">
            {t("footer_made")} <Heart className="w-3 h-3 fill-accent text-accent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
