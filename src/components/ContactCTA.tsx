import React from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">지금 바로 연락하세요!</h2>
          <p className="text-xl text-red-100 mb-8">
            무료 견적 | 당일 방문 | 현금 즉시 지급
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Methods */}
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">연락 방법</h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${t("contact.info.phoneValue")}`}
                  className="flex items-center space-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-8 h-8 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">전화 문의</div>
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
                    <div className="font-bold text-lg">카카오톡 상담</div>
                    <div className="text-red-100">24시간 빠른 답변</div>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
                  className="flex items-center space-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-xl p-4 transition-all duration-300 hover:scale-105"
                >
                  <MapPin className="w-8 h-8 text-yellow-300" />
                  <div>
                    <div className="font-bold text-lg">오시는 길</div>
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
                  <span>평일</span>
                  <span className="font-semibold">08:00 - 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span className="font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일</span>
                  <span className="text-red-200">휴무</span>
                </div>
              </div>
            </div>

            {/* Emergency Service */}
            <div className="bg-yellow-400 text-black rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">🚨 긴급 서비스</h3>
              <p className="mb-4">{t("contact.emergencyResponse")}</p>
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
              >
                긴급 문의 전화
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 inline-block">
            <p className="text-2xl font-bold mb-4">
              💰 지금 연락하면{" "}
              <span className="text-yellow-300">특가 혜택</span> 제공!
            </p>
            <p className="text-red-100 mb-6">
              첫 방문 고객 시세 우대 + 운반비 할인
            </p>
            <a
              href={`tel:${t("contact.info.phoneValue")}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              지금 전화하기 📞
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
