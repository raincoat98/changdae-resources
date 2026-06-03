import React from "react";
import { Wrench, Building2, Truck, Recycle, Shield, Clock, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  accent: string;
  tag: string;
}

const Services = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      icon: <Recycle className="w-7 h-7" />,
      title: t("services.scrapMetalPurchase.title"),
      description: t("services.scrapMetalPurchase.description"),
      features: t("services.scrapMetalPurchase.features") as unknown as string[],
      accent: "text-blue-600 bg-blue-50 border-blue-100",
      tag: "핵심 서비스",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: t("services.buildingDemolition.title"),
      description: t("services.buildingDemolition.description"),
      features: t("services.buildingDemolition.features") as unknown as string[],
      accent: "text-orange-600 bg-orange-50 border-orange-100",
      tag: "허가 완비",
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: t("services.factoryCleanup.title"),
      description: t("services.factoryCleanup.description"),
      features: t("services.factoryCleanup.features") as unknown as string[],
      accent: "text-emerald-600 bg-emerald-50 border-emerald-100",
      tag: "원스톱 처리",
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: t("services.wasteCollection.title"),
      description: t("services.wasteCollection.description"),
      features: t("services.wasteCollection.features") as unknown as string[],
      accent: "text-purple-600 bg-purple-50 border-purple-100",
      tag: "당일 가능",
    },
  ];

  const guarantees = [
    { icon: <Shield className="w-5 h-5 text-blue-600" />, text: t("services.guarantees.honestTrade") },
    { icon: <Clock className="w-5 h-5 text-blue-600" />, text: t("services.guarantees.quickProcessing") },
    { icon: <Recycle className="w-5 h-5 text-blue-600" />, text: t("services.guarantees.environmentalFriendly") },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            전문 서비스
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4">
            {t("services.professionalServices")}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("services.professionalServicesSubtitle")}
          </p>

          {/* Guarantee badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {guarantees.map((g, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {g.icon}
                {g.text}
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-slate-200 transition-all duration-300 card-hover animate-slide-in-up flex flex-col"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Tag */}
              <span className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">
                {service.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.accent} border flex items-center justify-center mb-4`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-black text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                {service.description}
              </p>

              <ul className="space-y-2 border-t border-slate-100 pt-4">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 mt-10 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black mb-1">
                {t("services.freeEstimate")}
              </h3>
              <p className="text-slate-400">
                {t("services.freeEstimateDesc")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 px-7 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-400/25"
              >
                <Phone className="w-5 h-5" />
                {t("contact.info.phoneValue")}
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold py-3 px-7 rounded-xl transition-all hover:bg-slate-800"
              >
                {t("contact.onlineInquiry")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
