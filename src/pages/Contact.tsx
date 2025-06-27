import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    agreement: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 서비스 종류 한글 매핑
    const serviceNames: { [key: string]: string } = {
      "metal-purchase": t("contact.services.metalPurchase"),
      demolition: t("contact.services.demolition"),
      "factory-cleanup": t("contact.services.factoryCleanup"),
      "waste-collection": t("contact.services.wasteCollection"),
      "equipment-removal": t("contact.services.equipmentRemoval"),
      other: t("contact.services.other"),
    };

    const serviceName = serviceNames[formData.service] || formData.service;

    // 메일 내용 구성
    const mailtoLink = `mailto:${t("contact.info.emailValue")}?subject=${t(
      "about.companyName"
    )} ${t("contact.form.submit")} - ${serviceName}&body=${t(
      "contact.form.name"
    )}: ${formData.name}%0D%0A${t("contact.form.phone")}: ${
      formData.phone
    }%0D%0A${t("contact.form.email")}: ${formData.email}%0D%0A${t(
      "contact.form.serviceType"
    )}: ${serviceName}%0D%0A${t("contact.form.message")}: ${
      formData.message
    }%0D%0A%0D%0A${t("contact.form.privacyAgreement")}: ${
      formData.agreement
        ? t("contact.agreement.yes")
        : t("contact.agreement.no")
    }`;

    // 메일 클라이언트 열기
    window.open(mailtoLink, "_blank");

    // 성공 메시지 표시
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-orange-100 mb-6">
            {t("contact.subtitle")}
          </p>
          <div className="text-3xl font-bold">
            📞 {t("contact.info.phoneValue")}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="bg-red-500 hover:bg-red-600 text-white p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {t("contact.contactMethods.phoneInquiry")}
              </h3>
              <p className="text-red-100 mb-4">
                {t("contact.contactMethods.phoneDesc")}
              </p>
              <div className="text-2xl font-bold">
                {t("contact.info.phoneValue")}
              </div>
            </a>

            <a
              href="http://pf.kakao.com/_example"
              className="bg-yellow-400 hover:bg-yellow-500 text-black p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {t("contact.contactMethods.kakaoConsult")}
              </h3>
              <p className="text-yellow-700 mb-4">
                {t("contact.contactMethods.kakaoDesc")}
              </p>
              <div className="text-lg font-bold">@{t("about.companyName")}</div>
            </a>

            <a
              href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
              className="bg-blue-500 hover:bg-blue-600 text-white p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {t("contact.contactMethods.directVisit")}
              </h3>
              <p className="text-blue-100 mb-4">
                {t("contact.contactMethods.directVisitDesc")}
              </p>
              <div className="text-sm font-semibold">
                {t("contact.viewMap")}
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.onlineInquiry")}
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">
                    {t("contact.successMessage")}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.serviceType")}
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">{t("contact.form.selectService")}</option>
                    <option value="metal-purchase">
                      {t("contact.services.metalPurchase")}
                    </option>
                    <option value="demolition">
                      {t("contact.services.demolition")}
                    </option>
                    <option value="factory-cleanup">
                      {t("contact.services.factoryCleanup")}
                    </option>
                    <option value="waste-collection">
                      {t("contact.services.wasteCollection")}
                    </option>
                    <option value="equipment-removal">
                      {t("contact.services.equipmentRemoval")}
                    </option>
                    <option value="other">{t("contact.services.other")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                    required
                    checked={formData.agreement}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-600">
                    {t("contact.form.privacyAgreement")}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t("contact.form.sendInquiry")}</span>
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t("contact.businessHours")}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">{t("contact.weekdays")}</span>
                    <span className="text-blue-600 font-semibold">
                      08:00 - 18:30
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">{t("contact.saturday")}</span>
                    <span className="text-blue-600 font-semibold">
                      08:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">{t("contact.sunday")}</span>
                    <span className="text-red-500 font-semibold">
                      {t("contact.closed")}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold text-center">
                    {t("contact.emergencySituation")}
                  </p>
                </div>
              </div>

              {/* Location Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t("contact.directions")}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {t("contact.info.address")}
                    </div>
                    <div className="text-gray-600">
                      {t("contact.info.addressValue")}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {t("contact.publicTransport")}
                    </div>
                    <div className="text-gray-600">
                      {t("contact.publicTransportDesc")}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {t("contact.parkingInfo")}
                    </div>
                    <div className="text-gray-600">
                      {t("contact.parkingDesc")}
                    </div>
                  </div>
                </div>

                <a
                  href="https://map.naver.com"
                  className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  {t("contact.viewMap")}
                </a>
              </div>

              {/* Additional Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t("contact.additionalContact")}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>{t("contact.representativePhone")}</span>
                    <a
                      href={`tel:${t("contact.info.phoneValue")}`}
                      className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                      {t("contact.info.phoneValue")}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.fax")}</span>
                    <span className="font-semibold">031-798-8579</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contact.email")}</span>
                    <a
                      href={`mailto:${t("contact.info.emailValue")}`}
                      className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                      {t("contact.info.emailValue")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("contact.emergencyQuestion")}
          </h2>
          <p className="text-xl text-red-100 mb-8">
            {t("contact.emergencyResponse")}
          </p>

          <a
            href={`tel:${t("contact.info.phoneValue")}`}
            className="bg-white hover:bg-gray-100 text-red-500 font-bold py-6 px-12 rounded-lg text-2xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-3"
          >
            <Phone className="w-8 h-8" />
            <span>
              {t("contact.emergencyContact")}: {t("contact.info.phoneValue")}
            </span>
          </a>

          <div className="mt-8">
            <p className="text-red-100">{t("contact.emergencyTip")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
