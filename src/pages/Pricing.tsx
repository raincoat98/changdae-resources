import { useState } from "react";
import {
  TrendingUp,
  Calendar,
  RefreshCw,
  Calculator,
  Phone,
  AlertCircle,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { usePricing } from "../contexts/PricingContext";

type CategoryId = "ferrous" | "non-ferrous" | "special" | "electronic";

interface PriceItem {
  name: string;
  price: string;
  unit: string;
  change: string;
  trend: "up" | "down" | "stable";
  description: string;
}

interface PriceData {
  [key: string]: PriceItem[];
}

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryId>("ferrous");
  const [isRealTimeEnabled, setIsRealTimeEnabled] = useState(true);
  const { t } = useTranslation();
  const { isPricingVisible } = usePricing();

  // 시세정보가 숨겨져 있으면 빈 페이지 반환
  if (!isPricingVisible) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            {t("pricing.hidden.title")}
          </h2>
          <p className="text-gray-500 mb-4">
            {t("pricing.hidden.description")}
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            {t("common.back")}
          </button>
        </div>
      </div>
    );
  }

  const categories = [
    { id: "ferrous", name: t("pricing.categories.ferrous"), icon: "🔩" },
    { id: "non-ferrous", name: t("pricing.categories.nonFerrous"), icon: "🥉" },
    { id: "special", name: t("pricing.categories.special"), icon: "⚡" },
    { id: "electronic", name: t("pricing.categories.electronic"), icon: "💻" },
  ];

  const priceData: PriceData = {
    ferrous: [
      {
        name: t("pricing.metalTypes.heavySteel.name"),
        price: "450",
        unit: t("pricing.unit"),
        change: "+5",
        trend: "up",
        description: t("pricing.metalTypes.heavySteel.description"),
      },
      {
        name: t("pricing.metalTypes.lightSteel.name"),
        price: "380",
        unit: t("pricing.unit"),
        change: "+3",
        trend: "up",
        description: t("pricing.metalTypes.lightSteel.description"),
      },
      {
        name: t("pricing.metalTypes.castIron.name"),
        price: "420",
        unit: t("pricing.unit"),
        change: "+8",
        trend: "up",
        description: t("pricing.metalTypes.castIron.description"),
      },
      {
        name: t("pricing.metalTypes.applianceSteel.name"),
        price: "400",
        unit: t("pricing.unit"),
        change: "±0",
        trend: "stable",
        description: t("pricing.metalTypes.applianceSteel.description"),
      },
      {
        name: t("pricing.metalTypes.autoSteel.name"),
        price: "480",
        unit: t("pricing.unit"),
        change: "+12",
        trend: "up",
        description: t("pricing.metalTypes.autoSteel.description"),
      },
      {
        name: t("pricing.metalTypes.constructionSteel.name"),
        price: "460",
        unit: t("pricing.unit"),
        change: "+7",
        trend: "up",
        description: t("pricing.metalTypes.constructionSteel.description"),
      },
    ],
    "non-ferrous": [
      {
        name: t("pricing.metalTypes.copper.name"),
        price: "8,500",
        unit: t("pricing.unit"),
        change: "-100",
        trend: "down",
        description: t("pricing.metalTypes.copper.description"),
      },
      {
        name: t("pricing.metalTypes.aluminum.name"),
        price: "2,800",
        unit: t("pricing.unit"),
        change: "+50",
        trend: "up",
        description: t("pricing.metalTypes.aluminum.description"),
      },
      {
        name: t("pricing.metalTypes.brass.name"),
        price: "6,200",
        unit: t("pricing.unit"),
        change: "+80",
        trend: "up",
        description: t("pricing.metalTypes.brass.description"),
      },
      {
        name: t("pricing.metalTypes.bronze.name"),
        price: "7,100",
        unit: t("pricing.unit"),
        change: "+45",
        trend: "up",
        description: t("pricing.metalTypes.bronze.description"),
      },
      {
        name: t("pricing.metalTypes.lead.name"),
        price: "2,100",
        unit: t("pricing.unit"),
        change: "±0",
        trend: "stable",
        description: t("pricing.metalTypes.lead.description"),
      },
      {
        name: t("pricing.metalTypes.zinc.name"),
        price: "2,400",
        unit: t("pricing.unit"),
        change: "+15",
        trend: "up",
        description: t("pricing.metalTypes.zinc.description"),
      },
    ],
    special: [
      {
        name: t("pricing.metalTypes.stainless304.name"),
        price: "1,200",
        unit: t("pricing.unit"),
        change: "+20",
        trend: "up",
        description: t("pricing.metalTypes.stainless304.description"),
      },
      {
        name: t("pricing.metalTypes.stainless316.name"),
        price: "1,800",
        unit: t("pricing.unit"),
        change: "+35",
        trend: "up",
        description: t("pricing.metalTypes.stainless316.description"),
      },
      {
        name: t("pricing.metalTypes.nickel.name"),
        price: "15,000",
        unit: t("pricing.unit"),
        change: "+200",
        trend: "up",
        description: t("pricing.metalTypes.nickel.description"),
      },
      {
        name: t("pricing.metalTypes.titanium.name"),
        price: "12,000",
        unit: t("pricing.unit"),
        change: "+150",
        trend: "up",
        description: t("pricing.metalTypes.titanium.description"),
      },
      {
        name: t("pricing.metalTypes.molybdenum.name"),
        price: "25,000",
        unit: t("pricing.unit"),
        change: "+500",
        trend: "up",
        description: t("pricing.metalTypes.molybdenum.description"),
      },
      {
        name: t("pricing.metalTypes.tungsten.name"),
        price: "35,000",
        unit: t("pricing.unit"),
        change: "+800",
        trend: "up",
        description: t("pricing.metalTypes.tungsten.description"),
      },
    ],
    electronic: [
      {
        name: t("pricing.metalTypes.cpu.name"),
        price: "180,000",
        unit: t("pricing.unit"),
        change: "+2000",
        trend: "up",
        description: t("pricing.metalTypes.cpu.description"),
      },
      {
        name: t("pricing.metalTypes.ram.name"),
        price: "45,000",
        unit: t("pricing.unit"),
        change: "+1000",
        trend: "up",
        description: t("pricing.metalTypes.ram.description"),
      },
      {
        name: t("pricing.metalTypes.circuitBoardHigh.name"),
        price: "8,500",
        unit: t("pricing.unit"),
        change: "+150",
        trend: "up",
        description: t("pricing.metalTypes.circuitBoardHigh.description"),
      },
      {
        name: t("pricing.metalTypes.circuitBoardNormal.name"),
        price: "2,800",
        unit: t("pricing.unit"),
        change: "+50",
        trend: "up",
        description: t("pricing.metalTypes.circuitBoardNormal.description"),
      },
      {
        name: t("pricing.metalTypes.copperWire.name"),
        price: "6,500",
        unit: t("pricing.unit"),
        change: "+100",
        trend: "up",
        description: t("pricing.metalTypes.copperWire.description"),
      },
      {
        name: t("pricing.metalTypes.motor.name"),
        price: "450",
        unit: t("pricing.unit"),
        change: "+5",
        trend: "up",
        description: t("pricing.metalTypes.motor.description"),
      },
    ],
  };

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
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="w-10 h-10" />
              <h1 className="text-4xl font-bold">
                {t("pricing.realTimePrices")}
              </h1>
            </div>
            <p className="text-xl text-green-100 mb-6">
              {t("pricing.realTimePricesSubtitle")}
            </p>

            {/* Real-time Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                {isRealTimeEnabled ? (
                  <Wifi className="w-5 h-5 text-green-300" />
                ) : (
                  <WifiOff className="w-5 h-5 text-gray-300" />
                )}
                <span className="text-sm font-medium text-green-100">
                  {isRealTimeEnabled
                    ? t("pricing.realTimeEnabled")
                    : t("pricing.realTimeDisabled")}
                </span>
              </div>
              <button
                onClick={() => setIsRealTimeEnabled(!isRealTimeEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 ${
                  isRealTimeEnabled ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isRealTimeEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {t("pricing.lastUpdate")}:{" "}
                  {isRealTimeEnabled
                    ? `${new Date().toLocaleDateString("ko-KR")} 09:00`
                    : t("pricing.lastUpdateOffline")}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <RefreshCw className="w-4 h-4" />
                <span>{t("pricing.dailyUpdate")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner - Only show when real-time is enabled */}
      {isRealTimeEnabled && (
        <div className="bg-yellow-400 text-black py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">
                {t("pricing.specialPriceAlert")} {t("pricing.specialPriceDesc")}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Offline Notice - Show when real-time is disabled */}
      {!isRealTimeEnabled && (
        <div className="bg-yellow-50 border-b border-yellow-200 text-yellow-800 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">
                {t("pricing.offlineNotice.title")} -{" "}
                {t("pricing.offlineNotice.description")}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as CategoryId)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceData[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-2xl">{getTrendIcon(item.trend)}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="text-3xl font-bold text-blue-600">
                      {item.price}
                    </span>
                    <span className="text-gray-600">{item.unit}</span>
                  </div>

                  <div
                    className={`text-sm font-medium ${getTrendColor(
                      item.trend
                    )}`}
                  >
                    {isRealTimeEnabled
                      ? `${t("pricing.previousDayChange")}: ${item.change}`
                      : t("pricing.offlinePrice")}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-500">
                    {isRealTimeEnabled
                      ? t("pricing.realTimePrices")
                      : t("pricing.offlinePrices")}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    {t("pricing.priceInquiry")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Calculator className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t("pricing.calculator.title")}
              </h2>
              <p className="text-gray-600">
                {t("pricing.calculator.subtitle")}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("pricing.calculator.itemSelection")}
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>
                      {t("pricing.metalTypes.heavySteel.name")} (450
                      {t("pricing.unit")})
                    </option>
                    <option>
                      {t("pricing.metalTypes.aluminum.name")} (2,800
                      {t("pricing.unit")})
                    </option>
                    <option>
                      {t("pricing.metalTypes.copper.name")} (8,500
                      {t("pricing.unit")})
                    </option>
                    <option>
                      {t("pricing.metalTypes.stainless304.name")} (1,200
                      {t("pricing.unit")})
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("pricing.calculator.weight")} (kg)
                  </label>
                  <input
                    type="number"
                    placeholder={t("pricing.calculator.weightPlaceholder")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    {t("pricing.calculator.calculate")}
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-600">
                  {t("pricing.calculator.estimatedAmount")}:{" "}
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  0{t("pricing.unit")}
                </span>
                <p className="text-xs text-gray-500 mt-2">
                  {t("pricing.calculator.disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t("pricing.importantNotes.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ✅ {t("pricing.importantNotes.pricePrinciples.title")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • {t("pricing.importantNotes.pricePrinciples.dailyUpdate")}
                </li>
                <li>
                  •{" "}
                  {t("pricing.importantNotes.pricePrinciples.customerPresence")}
                </li>
                <li>
                  •{" "}
                  {t(
                    "pricing.importantNotes.pricePrinciples.transparentCalculation"
                  )}
                </li>
                <li>
                  • {t("pricing.importantNotes.pricePrinciples.cashPayment")}
                </li>
                <li>
                  • {t("pricing.importantNotes.pricePrinciples.digitalScale")}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                📋 {t("pricing.importantNotes.purchaseConditions.title")}
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  •{" "}
                  {t("pricing.importantNotes.purchaseConditions.minimumAmount")}
                </li>
                <li>
                  •{" "}
                  {t(
                    "pricing.importantNotes.purchaseConditions.removeImpurities"
                  )}
                </li>
                <li>
                  • {t("pricing.importantNotes.purchaseConditions.idRequired")}
                </li>
                <li>
                  •{" "}
                  {t("pricing.importantNotes.purchaseConditions.noStolenGoods")}
                </li>
                <li>
                  •{" "}
                  {t(
                    "pricing.importantNotes.purchaseConditions.radiationCheck"
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("pricing.cta.title")}</h2>
          <p className="text-xl text-green-100 mb-8">
            {t("pricing.cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>
                {t("pricing.phoneEstimate")}: {t("contact.info.phoneValue")}
              </span>
            </a>
            <a
              href="http://pf.kakao.com/_example"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              {t("contact.kakaoConsult")}
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-green-100">
              💰 {t("pricing.cta.firstVisitBenefit")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
