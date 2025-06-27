import { Award, Truck, Shield, CheckCircle, Phone } from "lucide-react";
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
      name: t("about.truck"),
      count: t("about.truckCount"),
      description: t("about.truckDesc"),
    },
    {
      name: t("about.craneCargo"),
      count: t("about.craneCargoCount"),
      description: t("about.craneCargoDesc"),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {t("about.companyName")}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t("about.yearsExperience")}
              <br />
              {t("about.description")}
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">17+</div>
                <div className="text-blue-100">
                  {t("home.hero.yearsExperience")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">1,000+</div>
                <div className="text-blue-100">
                  {t("home.hero.customerSatisfaction")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-blue-100">
                  {t("about.completedProjects")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("about.trustedCompany")}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t("about.companyIntro")}
                {t("about.companyIntro2")}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t("about.companyIntro3")}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold">
                      {t("about.certifiedCompany")}
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("about.certifiedCompanyDesc")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold">{t("about.safeWork")}</div>
                    <div className="text-sm text-gray-600">
                      {t("about.safeWorkDesc")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("about.companyInfo")}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("about.companyNameLabel")}
                  </span>
                  <span className="font-semibold">
                    {t("about.companyName")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("about.foundedYear")}
                  </span>
                  <span className="font-semibold">
                    {t("about.foundedYearValue")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t("about.ceo")}</span>
                  <span className="font-semibold">{t("about.ceoName")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("about.businessNumber")}
                  </span>
                  <span className="font-semibold">
                    {t("about.businessNumberValue")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {t("contact.info.address")}
                  </span>
                  <div className="text-right">
                    <div className="font-semibold">
                      {t("contact.info.addressValue")}
                    </div>
                    <a
                      href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contact.viewMap")}
                    </a>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t("about.contact")}</span>
                  <span className="font-semibold">
                    {t("contact.info.phoneValue")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("about.history.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("about.history.subtitle")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-gray-900 font-semibold">
                        {milestone.event}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {t("about.certifications")}
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {t("about.equipment")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Truck className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {item.count}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("about.joinUs")}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("about.joinUsSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>
                {t("header.callNow")} {t("contactCTA.consultation")}
              </span>
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors"
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
