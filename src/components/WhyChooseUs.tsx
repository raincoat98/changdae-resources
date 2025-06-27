import { Award, Users, Clock, Shield, TrendingUp, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      title: t("home.whyChooseUs.trustedExperience.title"),
      description: t("home.whyChooseUs.trustedExperience.description"),
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: t("home.whyChooseUs.bestPrice.title"),
      description: t("home.whyChooseUs.bestPrice.description"),
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: t("home.whyChooseUs.quickProcessing.title"),
      description: t("home.whyChooseUs.quickProcessing.description"),
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: t("home.whyChooseUs.safeWork.title"),
      description: t("home.whyChooseUs.safeWork.description"),
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: t("home.whyChooseUs.professionalStaff.title"),
      description: t("home.whyChooseUs.professionalStaff.description"),
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: t("home.whyChooseUs.perfectEquipment.title"),
      description: t("home.whyChooseUs.perfectEquipment.description"),
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
              <div className="text-blue-100">
                {t("home.whyChooseUs.demolitionProjects")}
              </div>
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
            "{t("home.whyChooseUs.testimonial.text")}"
          </blockquote>
          <cite className="text-yellow-300 font-semibold">
            {t("home.whyChooseUs.testimonial.author")}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
