import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Get active section from current path
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/members") return "members";
    if (path === "/activities") return "activities";
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    return "home";
  };

  const activeSection = getActiveSection();

  const links = [
    { href: "/", label: t("nav_home"), id: "home" },
    { href: "/members", label: t("nav_members"), id: "members" },
    { href: "/activities", label: t("nav_activities"), id: "activities" },
    { href: "/about", label: t("nav_about"), id: "about" },
    { href: "/contact", label: t("nav_contact"), id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-3 md:top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-3 md:px-4`}
    >
      <nav className={`relative backdrop-blur-2xl bg-slate-900/40 dark:bg-slate-950/40 border border-white/10 dark:border-emerald-500/20 rounded-3xl shadow-2xl px-4 md:px-6 py-3 overflow-hidden transition-all duration-500 w-full max-w-7xl`}>
        {/* Subtle animated gradient overlay */}
        <motion.div
          animate={{
            background: dark ? [
              "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.03) 0%, transparent 50%)",
            ] : [
              "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.02) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.02) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 -z-10 pointer-events-none"
        />

        <div className="flex items-center justify-between relative z-10">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="relative w-10 h-10 md:w-11 md:h-11 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 shadow-lg shadow-emerald-500/20 flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={logo} 
                alt="MPIRSG logo" 
                className="w-6 h-6 md:w-7 md:h-7 relative z-10 drop-shadow-lg" 
              />
            </motion.div>
            <motion.div 
              className="hidden sm:block leading-tight"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="font-bold text-xs md:text-sm text-emerald-400 dark:text-emerald-300 flex items-center gap-1 drop-shadow-lg">
                {t("siteShort")}
              </div>
              <div className="text-[9px] md:text-[10px] text-gray-300 dark:text-gray-400 drop-shadow-lg">
                {t("siteName")}
              </div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center backdrop-blur-xl bg-white/5 dark:bg-white/10 rounded-2xl px-2 py-2 border border-white/10 dark:border-emerald-500/20 shadow-lg">
            <ul className="flex items-center gap-1">
              {links.map((l, idx) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Link
                    to={l.href}
                    className={`relative text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden ${
                      activeSection === l.id
                        ? "text-white"
                        : "text-gray-300 dark:text-gray-200 hover:text-white"
                    }`}
                  >
                    {/* Glassmorphism background for active state */}
                    {activeSection === l.id && (
                      <motion.div
                        layoutId="navBackground"
                        className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-emerald-500/30 to-teal-600/30 border border-emerald-400/30 rounded-xl shadow-lg shadow-emerald-500/20"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    
                    {/* Subtle hover background for non-active items */}
                    {activeSection !== l.id && (
                      <motion.div
                        className="absolute inset-0 backdrop-blur-xl bg-white/5 dark:bg-white/10 rounded-xl border border-white/10"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    
                    {/* Text with drop shadow */}
                    <span className="relative z-10 drop-shadow-lg">
                      {l.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Toggle - Ultra Modern Glassmorphism */}
            <motion.button
              onClick={() => setLang(lang === "bn" ? "en" : "bn")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className={`relative w-11 h-11 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                lang === "bn"
                  ? "bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-blue-400/30 shadow-lg shadow-blue-500/20"
                  : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400/30 shadow-lg shadow-cyan-500/20"
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    key={lang}
                    initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="text-xs font-bold text-white drop-shadow-lg"
                  >
                    {lang === "bn" ? "বাং" : "EN"}
                  </motion.span>
                </div>
              </div>
            </motion.button>
            
            {/* Theme Toggle - Ultra Modern Glassmorphism */}
            <motion.button
              onClick={() => setDark((d) => !d)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className={`relative w-11 h-11 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                dark
                  ? "bg-gradient-to-br from-slate-700/30 to-slate-900/30 border-slate-600/30 shadow-lg shadow-slate-700/20"
                  : "bg-gradient-to-br from-amber-400/30 to-orange-500/30 border-amber-400/40 shadow-lg shadow-amber-500/30"
              }`}>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    key={dark ? "dark" : "light"}
                    initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  >
                    {dark ? (
                      <Moon className="w-5 h-5 text-slate-300 drop-shadow-lg" />
                    ) : (
                      <Sun className="w-5 h-5 text-amber-500 drop-shadow-lg" />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.button>

            {/* Login Button - Ultra Modern Glassmorphism */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="ghost"
                    className="hidden md:flex items-center gap-2 h-11 px-5 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 hover:bg-emerald-500/30 text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <LogIn className="w-4 h-4 relative z-10 drop-shadow-lg" />
                    <span className="relative z-10 text-sm drop-shadow-lg">{t("nav_login")}</span>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-slate-900/95 dark:bg-slate-950/98 backdrop-blur-xl border-white/10 dark:border-emerald-500/20 rounded-2xl shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownMenuItem className="cursor-pointer py-3 text-gray-300 dark:text-gray-200 hover:text-white focus:bg-emerald-600/20 dark:focus:bg-emerald-500/30 rounded-xl transition-all duration-200">
                    <LogIn className="w-4 h-4 mr-2" />
                    {t("nav_login_rover")}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer py-3 text-gray-300 dark:text-gray-200 hover:text-white focus:bg-emerald-600/20 dark:focus:bg-emerald-500/30 rounded-xl transition-all duration-200">
                    <LogIn className="w-4 h-4 mr-2" />
                    {t("nav_login_admin")}
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-2xl backdrop-blur-xl bg-white/5 dark:bg-white/10 border border-white/10 dark:border-emerald-500/20 flex items-center justify-center text-gray-300 dark:text-gray-200 hover:text-white shadow-lg transition-all duration-300 group relative overflow-hidden"
              aria-label="Menu"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {open ? <X className="w-5 h-5 drop-shadow-lg" /> : <Menu className="w-5 h-5 drop-shadow-lg" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-white/10 dark:border-emerald-500/20"
          >
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to={l.href}
                    className={`block py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-200 backdrop-blur-xl border relative overflow-hidden group ${
                      activeSection === l.id
                        ? "text-white bg-gradient-to-br from-emerald-500/30 to-teal-600/30 border-emerald-400/30 shadow-lg shadow-emerald-500/20"
                        : "text-gray-300 dark:text-gray-200 hover:text-white bg-white/5 dark:bg-white/10 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 drop-shadow-lg">{l.label}</span>
                  </Link>
                </motion.li>
              ))}
              <li className="pt-2 border-t border-white/10 dark:border-emerald-500/20">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full text-left py-3 px-4 text-sm font-medium text-gray-300 dark:text-gray-200 hover:text-white backdrop-blur-xl bg-white/5 dark:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 drop-shadow-lg">{t("nav_login_rover")}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpen(false)}
                  className="w-full text-left py-3 px-4 text-sm font-medium text-gray-300 dark:text-gray-200 hover:text-white backdrop-blur-xl bg-white/5 dark:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 drop-shadow-lg">{t("nav_login_admin")}</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
