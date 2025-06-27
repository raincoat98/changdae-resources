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

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Advantage {
  icon: React.ReactNode;
  text: string;
}

const Services = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      icon: <Recycle className="w-12 h-12 text-blue-600" />,
      title: t("services.scrapMetalPurchase.title"),
      description: t("services.scrapMetalPurchase.description"),
      features: t(
        "services.scrapMetalPurchase.features"
      ) as unknown as string[],
    },
    {
      icon: <Building2 className="w-12 h-12 text-orange-600" />,
      title: t("services.buildingDemolition.title"),
      description: t("services.buildingDemolition.description"),
      features: t(
        "services.buildingDemolition.features"
      ) as unknown as string[],
    },
    {
      icon: <Wrench className="w-12 h-12 text-green-600" />,
      title: t("services.factoryCleanup.title"),
      description: t("services.factoryCleanup.description"),
      features: t("services.factoryCleanup.features") as unknown as string[],
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-600" />,
      title: t("services.wasteCollection.title"),
      description: t("services.wasteCollection.description"),
      features: t("services.wasteCollection.features") as unknown as string[],
    },
  ];

  const advantages: Advantage[] = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: t("services.guarantees.honestTrade"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: t("services.guarantees.quickProcessing"),
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      text: t("services.guarantees.environmentalFriendly"),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("services.professionalServices")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.professionalServicesSubtitle")}
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
          <h3 className="text-2xl font-bold mb-4">
            {t("services.freeEstimate")}
          </h3>
          <p className="text-blue-100 mb-6">{t("services.freeEstimateDesc")}</p>
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
              {t("contact.onlineInquiry")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
