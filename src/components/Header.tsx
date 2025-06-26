import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Recycle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.pricing"), href: "/pricing" },
    { name: t("navigation.contact"), href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex flex-col items-center space-x-4">
            <span>📍 {t("contact.info.addressValue")}</span>
            <span>⏰ {t("contact.info.weekdayHours")} </span>
            <span>⏰ {t("contact.info.saturdayHours")}</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="font-semibold hover:text-yellow-300 transition-colors"
            >
              {t("contact.info.phoneValue")}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                {t("about.companyName")}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA and Language Switcher */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>{t("header.callNow")}</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSwitcher />
              </div>
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="block w-full text-center bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-4"
              >
                {t("header.callNowPhone")}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
