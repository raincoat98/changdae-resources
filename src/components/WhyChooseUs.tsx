import { Award, Users, Clock, Shield, TrendingUp, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: "17년 신뢰의 경험",
      description:
        "2009년부터 축적된 전문 지식과 노하우로 최상의 서비스를 제공합니다.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "최고가 매입 보장",
      description:
        "실시간 시세 적용과 정확한 중량 측정으로 공정한 거래를 약속합니다.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "신속한 처리",
      description:
        "문의 접수 후 24시간 내 방문 견적, 당일 수거 및 대금 지급 가능합니다.",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "안전한 작업",
      description:
        "모든 작업은 안전 규정을 준수하며, 작업자 보험 완비로 안심하실 수 있습니다.",
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "전문 인력",
      description:
        "숙련된 전문가들이 현장 상황에 맞는 최적의 솔루션을 제공합니다.",
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "완벽한 장비",
      description:
        "트럭과 크레인카고(집게차)로 효율적이고 안전한 작업을 보장합니다.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t("home.whyChooseUs.title")}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t("home.whyChooseUs.subtitle")}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center mb-6">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center">
                {reason.title}
              </h3>
              <p className="text-blue-100 text-center leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                1,000+
              </div>
              <div className="text-blue-100">
                {t("home.hero.customerSatisfaction")}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">17+</div>
              <div className="text-blue-100">
                {t("home.hero.yearsExperience")}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                500+
              </div>
              <div className="text-blue-100">철거 프로젝트</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">24H</div>
              <div className="text-blue-100">
                {t("home.hero.quickResponse")}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mt-16">
          <blockquote className="text-xl italic text-blue-100 mb-4">
            "정말 만족스러운 서비스였습니다. 시세도 합리적이고 작업도 깔끔하게
            해주셨어요. 다음에도 꼭 이용하겠습니다."
          </blockquote>
          <cite className="text-yellow-300 font-semibold">
            - 강남구 A공장 대표
          </cite>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
