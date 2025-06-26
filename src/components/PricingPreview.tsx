import React from "react";
import { TrendingUp, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PricingPreview = () => {
  const { t } = useTranslation();

  const currentPrices = [
    {
      name: "고철 (Heavy Steel)",
      price: "450",
      unit: "원/kg",
      change: "+5",
      trend: "up",
    },
    {
      name: "알루미늄 (Aluminum)",
      price: "2,800",
      unit: "원/kg",
      change: "+50",
      trend: "up",
    },
    {
      name: "동 (Copper)",
      price: "8,500",
      unit: "원/kg",
      change: "-100",
      trend: "down",
    },
    {
      name: "스테인리스 (Stainless)",
      price: "1,200",
      unit: "원/kg",
      change: "+20",
      trend: "up",
    },
    {
      name: "황동 (Brass)",
      price: "6,200",
      unit: "원/kg",
      change: "+80",
      trend: "up",
    },
    {
      name: "납 (Lead)",
      price: "2,100",
      unit: "원/kg",
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
              실시간 시세 정보
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            매일 업데이트되는 최신 금속 시세를 확인하세요
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>
              최종 업데이트: {new Date().toLocaleDateString("ko-KR")} 09:00
            </span>
          </div>
        </div>

        {/* Price Alert Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl p-6 mb-12 text-center">
          <h3 className="text-xl font-bold mb-2">🔥 금주 특별 시세 상승!</h3>
          <p className="text-orange-100">
            알루미늄, 동 시세 급등 중! 지금이 매각 최적 타이밍입니다.
          </p>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentPrices.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-white border hover:border-blue-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
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
                  <span>전일 대비: {item.change}</span>
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
                정확한 시세 적용 약속
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>매일 오전 9시 시세 업데이트</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>중량 측정 시 고객 입회 가능</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>투명한 가격 계산 과정 공개</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>현금 즉시 지급</span>
                </li>
              </ul>
            </div>

            <div className="text-center lg:text-right">
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                <span>전체 시세 보기</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">시세 문의</p>
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
