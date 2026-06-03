import { Phone, MessageCircle, MapPin, Clock, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-bold text-sm uppercase tracking-widest">
            지금 바로 시작하세요
          </span>
          <h2 className="text-4xl font-black text-white mt-2 mb-3">
            {t("contactCTA.title")}
          </h2>
          <p className="text-slate-400 text-lg">
            {t("contactCTA.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* ── 전화 ── */}
          <a
            href={`tel:${t("contact.info.phoneValue")}`}
            className="group bg-amber-400 hover:bg-amber-300 rounded-2xl p-7 flex flex-col transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-slate-950/15 rounded-xl flex items-center justify-center mb-5">
              <Phone className="w-6 h-6 text-slate-950" />
            </div>
            <div className="text-slate-950 font-black text-xl mb-1">
              {t("contactCTA.phoneInquiry")}
            </div>
            <div className="text-slate-900/70 text-sm mb-4">즉시 상담 · 당일 방문</div>
            <div className="text-slate-950 font-black text-2xl mt-auto">
              {t("contact.info.phoneValue")}
            </div>
            <div className="flex items-center gap-1 text-slate-900/60 text-xs mt-2 group-hover:gap-2 transition-all">
              전화 연결하기 <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* ── 카카오톡 ── */}
          <a
            href="http://pf.kakao.com/_example"
            className="group bg-yellow-300/90 hover:bg-yellow-300 rounded-2xl p-7 flex flex-col transition-all duration-200 hover:shadow-2xl hover:shadow-yellow-300/30 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-slate-950/15 rounded-xl flex items-center justify-center mb-5 text-2xl">
              💬
            </div>
            <div className="text-slate-950 font-black text-xl mb-1">
              {t("footer.kakaoConsult")}
            </div>
            <div className="text-slate-900/70 text-sm mb-4">
              {t("contact.quickResponse")}
            </div>
            <div className="text-slate-950 font-black text-2xl mt-auto">
              카카오채널 바로가기
            </div>
            <div className="flex items-center gap-1 text-slate-900/60 text-xs mt-2 group-hover:gap-2 transition-all">
              채널 연결하기 <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* ── 정보 카드 ── */}
          <div className="space-y-3">
            {/* 영업시간 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="text-white font-bold">{t("contact.businessHours")}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>{t("contact.weekdays")}</span>
                  <span className="font-semibold text-white">08:00 – 18:30</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{t("contact.saturday")}</span>
                  <span className="font-semibold text-white">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>{t("contact.sunday")}</span>
                  <span className="text-slate-500">{t("contact.closed")}</span>
                </div>
              </div>
            </div>

            {/* 오시는 길 */}
            <a
              href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-colors group"
            >
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-bold text-sm">{t("contact.directions")}</div>
                <div className="text-slate-400 text-xs mt-0.5">{t("contact.info.addressValue")}</div>
                <div className="text-blue-400 text-xs mt-1.5 group-hover:text-blue-300 transition-colors">
                  네이버 지도 보기 →
                </div>
              </div>
            </a>

            {/* 긴급 서비스 */}
            <div className="bg-red-500/15 border border-red-500/30 rounded-2xl p-5">
              <div className="text-white font-black mb-1">{t("contact.emergencyService")}</div>
              <p className="text-red-200 text-xs mb-3">{t("contact.emergencyResponse")}</p>
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t("contact.emergencyInquiry")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom offer */}
        <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-blue-600/5 border border-blue-500/20 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-black text-xl mb-1">
              {t("contact.specialOfferTitle")}
            </p>
            <p className="text-slate-400 text-sm">{t("contact.firstVisitBenefit")}</p>
          </div>
          <a
            href={`tel:${t("contact.info.phoneValue")}`}
            className="shrink-0 flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-8 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-amber-400/25 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            {t("contact.callNow")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
