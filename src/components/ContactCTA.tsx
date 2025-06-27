import React from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("contactCTA.title")}</h2>
          <p className="text-xl text-red-100 mb-8">
            {t("contactCTA.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Methods */}
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {t("contactCTA.contactMethods")}
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${t("contact.info.phoneValue")}`}
                  className="flex items-center space-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-8 h-8 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">
                      {t("contactCTA.phoneInquiry")}
                    </div>
                    <div className="text-red-100">
                      {t("contact.info.phoneValue")}
                    </div>
                  </div>
                </a>

                {/* KakaoTalk */}
                <a
                  href="http://pf.kakao.com/_example"
                  className="flex items-center space-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-8 h-8 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">
                      {t("footer.kakaoConsult")}
                    </div>
                    <div className="text-red-100">
                      {t("contact.quickResponse")}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
                  className="flex items-center space-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <MapPin className="w-8 h-8 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">
                      {t("contact.directions")}
                    </div>
                    <div className="text-red-100">
                      {t("contact.info.addressValue")}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Business Hours & Emergency */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-6 h-6 text-yellow-300" />
                <h3 className="text-xl font-bold">
                  {t("contact.businessHours")}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{t("contact.weekdays")}</span>
                  <span className="font-semibold">08:00 - 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.saturday")}</span>
                  <span className="font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("contact.sunday")}</span>
                  <span className="text-red-200">{t("contact.closed")}</span>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-yellow-400 text-black rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">
                {t("contact.emergencyService")}
              </h3>
              <p className="mb-4">{t("contact.emergencyResponse")}</p>
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
              >
                {t("contact.emergencyInquiry")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 inline-block">
            <p className="text-2xl font-bold mb-4">
              {t("contact.specialOfferTitle")}
            </p>
            <p className="text-red-100 mb-6">
              {t("contact.firstVisitBenefit")}
            </p>
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t("contact.callNow")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
