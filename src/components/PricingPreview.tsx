import React, { useState } from "react";
import { TrendingUp, Calendar, ArrowRight, Wifi, WifiOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PricingPreview = () => {
  const { t } = useTranslation();
  const [isRealTimeEnabled, setIsRealTimeEnabled] = useState(true);

  const currentPrices = [
    {
      name: t("pricing.metals.heavySteel"),
      price: "450",
      unit: t("pricing.unit"),
      change: "+5",
      trend: "up",
    },
    {
      name: t("pricing.metals.aluminum"),
      price: "2,800",
      unit: t("pricing.unit"),
      change: "+50",
      trend: "up",
    },
    {
      name: t("pricing.metals.copper"),
      price: "8,500",
      unit: t("pricing.unit"),
      change: "-100",
      trend: "down",
    },
    {
      name: t("pricing.metals.stainless"),
      price: "1,200",
      unit: t("pricing.unit"),
      change: "+20",
      trend: "up",
    },
    {
      name: t("pricing.metals.brass"),
      price: "6,200",
      unit: t("pricing.unit"),
      change: "+80",
      trend: "up",
    },
    {
      name: t("pricing.metals.lead"),
      price: "2,100",
      unit: t("pricing.unit"),
      change: "±0",
      trend: "stable",
    },
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return "↗️";
      case "down":
        return "↘️";
      default:
        return "➡️";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              {t("pricing.realTimePrices")}
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            {t("pricing.realTimePricesSubtitle")}
          </p>

          {/* Real-time Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              {isRealTimeEnabled ? (
                <Wifi className="w-5 h-5 text-green-600" />
              ) : (
                <WifiOff className="w-5 h-5 text-gray-400" />
              )}
              <span className="text-sm font-medium text-gray-700">
                {isRealTimeEnabled
                  ? t("pricing.realTimeEnabled")
                  : t("pricing.realTimeDisabled")}
              </span>
            </div>
            <button
              onClick={() => setIsRealTimeEnabled(!isRealTimeEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isRealTimeEnabled ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isRealTimeEnabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>
              {t("pricing.lastUpdate")}:{" "}
              {isRealTimeEnabled
                ? `${new Date().toLocaleDateString("ko-KR")} 09:00`
                : t("pricing.lastUpdateOffline")}
            </span>
          </div>
        </div>

        {/* Price Alert Banner - Only show when real-time is enabled */}
        {isRealTimeEnabled && (
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl p-6 mb-12 text-center">
            <h3 className="text-xl font-bold mb-2">
              {t("pricing.specialPriceAlert")}
            </h3>
            <p className="text-orange-100">{t("pricing.specialPriceDesc")}</p>
          </div>
        )}

        {/* Offline Notice - Show when real-time is disabled */}
        {!isRealTimeEnabled && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl p-6 mb-12 text-center">
            <h3 className="text-xl font-bold mb-2">
              {t("pricing.offlineNotice.title")}
            </h3>
            <p className="text-yellow-700">
              {t("pricing.offlineNotice.description")}
            </p>
          </div>
        )}

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentPrices.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-50 hover:bg-white border hover:border-blue-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
                !isRealTimeEnabled ? "opacity-75" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.name}
                </h3>
                <span className="text-2xl">{getTrendIcon(item.trend)}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-blue-600">
                    {item.price}
                  </span>
                  <span className="text-gray-600">{item.unit}</span>
                </div>

                <div
                  className={`flex items-center space-x-1 text-sm font-medium ${getTrendColor(
                    item.trend
                  )}`}
                >
                  <span>
                    {isRealTimeEnabled
                      ? `${t("pricing.previousDayChange")}: ${item.change}`
                      : t("pricing.offlinePrice")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {isRealTimeEnabled
                  ? t("pricing.accuratePricePromise")
                  : t("pricing.offlinePricePromise")}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {isRealTimeEnabled ? (
                  <>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{t("pricing.dailyUpdate")}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{t("pricing.customerPresence")}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{t("pricing.transparentCalculation")}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{t("pricing.cashPayment")}</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>{t("pricing.offlineFeatures.referencePrice")}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>
                        {t("pricing.offlineFeatures.contactForUpdate")}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>{t("pricing.offlineFeatures.phoneInquiry")}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="text-center lg:text-right">
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <span>{t("pricing.viewAllPrices")}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">
                  {t("pricing.priceInquiryLabel")}
                </p>
                <a
                  href={`tel:${t("contact.info.phoneValue")}`}
                  className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                >
                  {t("contact.info.phoneValue")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
