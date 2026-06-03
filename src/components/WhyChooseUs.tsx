import { Award, Users, Clock, Shield, TrendingUp, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: <Award className="w-6 h-6" />,
      color: "text-amber-400 bg-amber-400/15",
      title: t("home.whyChooseUs.trustedExperience.title"),
      description: t("home.whyChooseUs.trustedExperience.description"),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-emerald-400 bg-emerald-400/15",
      title: t("home.whyChooseUs.bestPrice.title"),
      description: t("home.whyChooseUs.bestPrice.description"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      color: "text-sky-400 bg-sky-400/15",
      title: t("home.whyChooseUs.quickProcessing.title"),
      description: t("home.whyChooseUs.quickProcessing.description"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      color: "text-violet-400 bg-violet-400/15",
      title: t("home.whyChooseUs.safeWork.title"),
      description: t("home.whyChooseUs.safeWork.description"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      color: "text-rose-400 bg-rose-400/15",
      title: t("home.whyChooseUs.professionalStaff.title"),
      description: t("home.whyChooseUs.professionalStaff.description"),
    },
    {
      icon: <Truck className="w-6 h-6" />,
      color: "text-orange-400 bg-orange-400/15",
      title: t("home.whyChooseUs.perfectEquipment.title"),
      description: t("home.whyChooseUs.perfectEquipment.description"),
    },
  ];

  const stats = [
    { value: "1,000+", label: t("home.hero.customerSatisfaction") },
    { value: "17+", label: t("home.hero.yearsExperience") },
    { value: "500+", label: t("home.whyChooseUs.demolitionProjects") },
    { value: "당일", label: "방문 처리" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            왜 창대자원인가
          </span>
          <h2 className="text-4xl font-black mt-2 mb-4">
            {t("home.whyChooseUs.title")}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("home.whyChooseUs.subtitle")}
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-2xl p-6 transition-all duration-300 card-hover animate-slide-in-up"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className={`w-11 h-11 ${reason.color} rounded-xl flex items-center justify-center mb-4`}>
                {reason.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="animate-count-up"
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="text-4xl font-black text-amber-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-amber-400 text-lg">★</span>
            ))}
          </div>
          <blockquote className="text-lg text-slate-200 italic mb-4 max-w-2xl mx-auto leading-relaxed">
            &ldquo;{t("home.whyChooseUs.testimonial.text")}&rdquo;
          </blockquote>
          <cite className="text-amber-400 font-bold not-italic">
            {t("home.whyChooseUs.testimonial.author")}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
