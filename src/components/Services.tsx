import React from "react";
import {
  Wrench,
  Building2,
  Truck,
  Recycle,
  Shield,
  Clock,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Recycle className="w-12 h-12 text-blue-600" />,
      title: "고철·비철 매입",
      description:
        "철강, 알루미늄, 동, 스테인리스 등 모든 금속류를 최고가로 매입합니다.",
      features: ["실시간 시세 적용", "정확한 중량 측정", "현금 즉시 지급"],
    },
    {
      icon: <Building2 className="w-12 h-12 text-orange-600" />,
      title: t("services.buildingDemolition.title"),
      description: t("services.buildingDemolition.description"),
      features: ["허가 대행 서비스", "안전한 철거 작업", "폐기물 처리"],
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: "공장 정리",
      description:
        "공장 이전, 폐업, 설비 교체 시 발생하는 모든 폐기물을 처리합니다.",
      features: ["설비 해체", "폐기물 분류", "부지 정리"],
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-600" />,
      title: "폐기물 수거",
      description: "산업폐기물, 생활폐기물 등 모든 종류의 폐기물을 수거합니다.",
      features: ["당일 수거 가능", "대량 처리", "환경 친화적"],
    },
  ];

  const advantages = [
    { icon: <Shield className="w-6 h-6" />, text: "정직한 거래" },
    { icon: <Clock className="w-6 h-6" />, text: "신속한 처리" },
    { icon: <Recycle className="w-6 h-6" />, text: "친환경 처리" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">전문 서비스</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            17년 경험의 전문가가 고객의 모든 요구사항을 원스톱으로 해결합니다
          </p>

          {/* Advantages */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-blue-600"
              >
                {advantage.icon}
                <span className="font-semibold">{advantage.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8"
            >
              <div className="text-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">무료 견적을 받아보세요</h3>
          <p className="text-blue-100 mb-6">
            전화 한 통으로 전문가가 직접 방문하여 정확한 견적을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t("contact.info.phoneValue")}</span>
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              온라인 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
