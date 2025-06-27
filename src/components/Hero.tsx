import React from "react";
import { Phone, TrendingUp, Truck, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-yellow-300 animate-pulse">
                {t("home.hero.title")}
              </span>
              <br />
              <span>{t("home.hero.scrapMetalSpecialist")}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-200">
              {t("home.hero.subtitle")}
              <br />
              {t("home.hero.demolitionServices")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-400">
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>
                  {t("home.hero.callNow")} {t("contact.info.phoneValue")}
                </span>
              </a>
              <a
                href="http://pf.kakao.com/_example"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t("home.hero.kakaoConsult")}
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center animate-fade-in-up animation-delay-600">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-700">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-semibold">{t("home.hero.realTimePrice")}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-800">
                <Truck className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-semibold">{t("home.hero.sameDayPickup")}</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-900">
                <Building2 className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-semibold">
                  {t("home.hero.demolitionExpert")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-400">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-500">
              <div className="text-3xl font-bold text-yellow-300 mb-2">17+</div>
              <div className="text-sm text-blue-100">
                {t("home.hero.yearsExperience")}
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-600">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                1,000+
              </div>
              <div className="text-sm text-blue-100">
                {t("home.hero.customerSatisfaction")}
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-700">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24H</div>
              <div className="text-sm text-blue-100">
                {t("home.hero.quickResponse")}
              </div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-slide-in-up animation-delay-800">
              <div className="text-3xl font-bold text-yellow-300 mb-2">
                100%
              </div>
              <div className="text-sm text-blue-100">
                {t("home.hero.honestTrade")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 shadow-xl border-t-2 border-red-800 relative overflow-hidden">
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 bg-red-500 opacity-10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg md:text-xl animate-slide-in-up">
            <span className="inline-block animate-pulse">🚨</span>{" "}
            {t("home.hero.emergencyBanner")}
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="ml-2 underline hover:text-yellow-300 transition-colors duration-200 font-extrabold bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-lg hover:bg-opacity-40 hover:scale-105 transform"
            >
              {t("home.hero.callNowArrow")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
