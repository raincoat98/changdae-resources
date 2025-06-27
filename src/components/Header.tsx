import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  Recycle,
  TrendingUp,
  Eye,
  EyeOff,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePricing } from "../contexts/PricingContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const {
    isPricingVisible,
    isContactVisible,
    togglePricingVisibility,
    toggleContactVisibility,
  } = usePricing();

  const navigation = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.about"), href: "/about" },
    ...(isPricingVisible
      ? [{ name: t("navigation.pricing"), href: "/pricing" }]
      : []),
    ...(isContactVisible
      ? [{ name: t("navigation.contact"), href: "/contact" }]
      : []),
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
            <Link
              to="/"
              className="flex items-center space-x-2 animate-slide-in-left"
            >
              <Recycle className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                {t("about.companyName")}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 animate-fade-in-up animation-delay-200">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : ""
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA, Pricing Toggle, and Language Switcher */}
            <div className="hidden md:flex items-center space-x-4 animate-slide-in-right">
              {/* Pricing Toggle */}
              {/* <button
                onClick={togglePricingVisibility}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                title={
                  isPricingVisible
                    ? t("header.hidePricing")
                    : t("header.showPricing")
                }
              >
                <TrendingUp className="w-4 h-4" />
                {isPricingVisible ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                <span className="hidden lg:inline">
                  {isPricingVisible
                    ? t("header.hidePricing")
                    : t("header.showPricing")}
                </span>
              </button> */}

              {/* Contact Toggle */}
              {/* <button
                onClick={toggleContactVisibility}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                title={
                  isContactVisible
                    ? t("header.hideContact")
                    : t("header.showContact")
                }
              >
                <MessageCircle className="w-4 h-4" />
                {isContactVisible ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                <span className="hidden lg:inline">
                  {isContactVisible
                    ? t("header.hideContact")
                    : t("header.showContact")}
                </span>
              </button> */}

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

              {/* Mobile Pricing Toggle */}
              {/* <button
                onClick={() => {
                  togglePricingVisibility();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <TrendingUp className="w-4 h-4" />
                {isPricingVisible ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                <span>
                  {isPricingVisible
                    ? t("header.hidePricing")
                    : t("header.showPricing")}
                </span>
              </button> */}

              {/* Mobile Contact Toggle */}
              {/* <button
                onClick={() => {
                  toggleContactVisibility();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {isContactVisible ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                <span>
                  {isContactVisible
                    ? t("header.hideContact")
                    : t("header.showContact")}
                </span>
              </button> */}

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
