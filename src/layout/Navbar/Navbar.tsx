import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

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
    <header className="fixed top-3 md:top-4 left-0 right-0 z-50 flex justify-center px-2 md:px-4">
      <nav className="relative backdrop-blur-xl bg-slate-900/40 dark:bg-slate-950/40 border border-white/10 dark:border-emerald-500/20 rounded-3xl shadow-xl px-3 md:px-6 py-2.5 md:py-3 w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 flex items-center justify-center">
              <img 
                src={logo} 
                alt="MPIRSG" 
                className="w-5 h-5 md:w-7 md:h-7" 
              />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-xs md:text-sm text-emerald-400 dark:text-emerald-300">
                {t("siteShort")}
              </div>
              <div className="hidden sm:block text-[9px] md:text-[10px] text-gray-300 dark:text-gray-400">
                {t("siteName")}
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center bg-white/5 dark:bg-white/10 rounded-2xl px-2 py-2 border border-white/10">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className={`relative text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
                      activeSection === l.id
                        ? "text-white bg-gradient-to-br from-emerald-500/30 to-teal-600/30"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button
              onClick={() => setLang(lang === "bn" ? "en" : "bn")}
              className="w-9 h-9 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-400/30 flex items-center justify-center transition-transform active:scale-95"
            >
              <span className="text-xs font-bold text-white">
                {lang === "bn" ? "বাং" : "EN"}
              </span>
            </button>
            
            <button
              onClick={() => setDark((d) => !d)}
              className="w-9 h-9 md:w-11 md:h-11 rounded-2xl bg-gradient-to-br from-amber-400/30 to-orange-500/30 border border-amber-400/40 flex items-center justify-center transition-transform active:scale-95"
            >
              {dark ? <Moon className="w-4 h-4 md:w-5 md:h-5 text-slate-300" /> : <Sun className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className="hidden md:flex items-center gap-2 h-11 px-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-400/30 hover:bg-emerald-500/30 text-white font-semibold transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  <span className="text-sm">{t("nav_login")}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-slate-900/95 backdrop-blur-xl border-white/10 rounded-2xl">
                <Link to="/student-login">
                  <DropdownMenuItem className="cursor-pointer py-3 text-gray-300 hover:text-white focus:bg-emerald-600/20 rounded-xl">
                    <LogIn className="w-4 h-4 mr-2" />
                    {t("nav_login_rover")}
                  </DropdownMenuItem>
                </Link>
                <Link to="/admin-login">
                  <DropdownMenuItem className="cursor-pointer py-3 text-gray-300 hover:text-white focus:bg-emerald-600/20 rounded-xl">
                    <LogIn className="w-4 h-4 mr-2" />
                    {t("nav_login_admin")}
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all active:scale-95"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    onClick={() => setOpen(false)}
                    to={l.href}
                    className={`block py-3 px-4 text-sm font-semibold rounded-xl transition-colors ${
                      activeSection === l.id
                        ? "text-white bg-gradient-to-br from-emerald-500/30 to-teal-600/30"
                        : "text-gray-300 hover:text-white bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link to="/student-login" onClick={() => setOpen(false)}>
                  <button className="w-full text-left py-3 px-4 text-sm font-medium text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl transition-colors">
                    {t("nav_login_rover")}
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/admin-login" onClick={() => setOpen(false)}>
                  <button className="w-full text-left py-3 px-4 text-sm font-medium text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl transition-colors">
                    {t("nav_login_admin")}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
