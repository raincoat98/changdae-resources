import { Award, Truck, Shield, CheckCircle2, Phone, MapPin, Building2, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const milestones = [
    { year: "2009", event: t("about.history.2009") },
    { year: "2012", event: t("about.history.2012") },
    { year: "2015", event: t("about.history.2015") },
    { year: "2018", event: t("about.history.2018") },
    { year: "2023", event: t("about.history.2023") },
    { year: "2024", event: t("about.history.2024") },
  ];

  const certifications = [
    t("about.wasteDisposalPermit"),
    t("about.constructionWastePermit"),
    t("about.generalWastePermit"),
    t("about.safetyCompliance"),
    t("about.environmentalCertification"),
  ];

  const equipment = [
    {
      icon: <Truck className="w-6 h-6" />,
      name: t("about.truck"),
      count: t("about.truckCount"),
      description: t("about.truckDesc"),
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      name: t("about.craneCargo"),
      count: t("about.craneCargoCount"),
      description: t("about.craneCargoDesc"),
    },
  ];

  const stats = [
    { value: "17+", label: t("home.hero.yearsExperience") },
    { value: "1,000+", label: t("home.hero.customerSatisfaction") },
    { value: "500+", label: t("about.completedProjects") },
  ];

  const companyInfo = [
    { label: t("about.companyNameLabel"), value: t("about.companyName") },
    { label: t("about.foundedYear"), value: t("about.foundedYearValue") },
    { label: t("about.ceo"), value: t("about.ceoName") },
    { label: t("about.businessNumber"), value: t("about.businessNumberValue") },
    { label: t("about.contact"), value: t("contact.info.phoneValue") },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <span className="inline-block text-amber-400 font-bold text-sm uppercase tracking-widest mb-4 animate-fade-in">
              회사 소개
            </span>
            <h1 className="text-5xl lg:text-6xl font-black mb-5 animate-fade-in-up animation-delay-100">
              {t("about.companyName")}
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
              {t("about.history.yearsExperience")}
              <br />
              {t("about.description")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-300">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl px-10 py-5 text-center"
                >
                  <div className="text-4xl font-black text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: intro */}
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                신뢰받는 전문 기업
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-5">
                {t("about.trustedCompany")}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t("about.companyIntro")}
                {t("about.companyIntro2")}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                {t("about.companyIntro3")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <Award className="w-7 h-7 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t("about.certifiedCompany")}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{t("about.certifiedCompanyDesc")}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                  <Shield className="w-7 h-7 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t("about.safeWork")}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{t("about.safeWorkDesc")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: company info card */}
            <div className="bg-slate-900 rounded-2xl p-7 text-white">
              <h3 className="text-lg font-black mb-5 text-amber-400">
                {t("about.companyInfo")}
              </h3>
              <div className="space-y-4">
                {companyInfo.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-700/60 pb-4 last:border-0 last:pb-0">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="font-bold text-white text-sm">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-start border-b border-slate-700/60 pb-4">
                  <span className="text-slate-400 text-sm">{t("contact.info.address")}</span>
                  <div className="text-right">
                    <div className="font-bold text-white text-sm">{t("contact.info.addressValue")}</div>
                    <a
                      href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
                      className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contact.viewMap")} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
              연혁
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2">
              {t("about.history.title")}
            </h2>
            <p className="text-slate-500">{t("about.history.subtitle")}</p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="w-[calc(50%-2rem)]">
                    <div
                      className={`bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow card-hover animate-slide-in-up ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <div className="text-2xl font-black text-blue-600 mb-1">{milestone.year}</div>
                      <div className="text-slate-700 font-semibold text-sm">{milestone.event}</div>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm z-10" />

                  {/* Spacer */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications & Equipment ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                허가 · 인증
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2 mb-7">
                {t("about.certifications")}
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-5 py-3.5 hover:border-emerald-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                보유 장비
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2 mb-7">
                {t("about.equipment")}
              </h3>
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 text-white rounded-2xl p-6 flex items-center gap-5"
                  >
                    <div className="w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-slate-400 text-sm mt-0.5">{item.description}</div>
                    </div>
                    <div className="text-3xl font-black text-amber-400 shrink-0">
                      {item.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-3">
            {t("about.joinUs")}
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            {t("about.joinUsSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-9 py-4 rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              무료 견적 전화
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-9 py-4 rounded-xl text-lg transition-all hover:bg-slate-800"
            >
              {t("about.onlineInquiry")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
