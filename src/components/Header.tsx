import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePricing } from "../contexts/PricingContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { isPricingVisible, isContactVisible } = usePricing();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.about"), href: "/about" },
    ...(isPricingVisible ? [{ name: t("navigation.pricing"), href: "/pricing" }] : []),
    ...(isContactVisible ? [{ name: t("navigation.contact"), href: "/contact" }] : []),
  ];

  const isActive = (path: string) => location.pathname === path;

  const trustBadges = [
    "17년 경력",
    "폐기물처리업 허가",
    "철거업 등록",
    "무사고 운영",
  ];

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-1 gap-x-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                {badge}
              </span>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="text-slate-500">{t("contact.info.weekdayHours")} / {t("contact.info.saturdayHours")}</span>
            <span className="text-slate-600">|</span>
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="font-bold text-white hover:text-amber-400 transition-colors text-sm"
            >
              {t("contact.info.phoneValue")}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-xs leading-none">창대</span>
              </div>
              <div>
                <div className="text-lg font-black text-slate-900 leading-tight tracking-tight">
                  창대자원
                </div>
                <div className="text-xs text-slate-400 leading-tight">
                  고철·비철·철거 전문
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-px"
              >
                <Phone className="w-4 h-4" />
                무료 견적 전화
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              aria-label="메뉴"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2.5 border-t border-slate-100 mt-2">
                <LanguageSwitcher />
                <a
                  href={`tel:${t("contact.info.phoneValue")}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  {t("contact.info.phoneValue")} · 무료 견적
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
