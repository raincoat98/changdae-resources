import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const FloatingContact = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* KakaoTalk */}
      <a
        href="http://pf.kakao.com/_example"
        className="flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 pl-4 pr-4 py-3 rounded-full shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-0.5 font-bold text-sm"
        title={t("floatingContact.kakaoConsult")}
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline">카카오 상담</span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${t("contact.info.phoneValue")}`}
        className="flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white pl-4 pr-4 py-3 rounded-full shadow-lg shadow-blue-600/40 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/50 hover:-translate-y-0.5 font-bold text-sm animate-pulse-ring"
        title={t("floatingContact.callNow")}
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline">무료 견적 전화</span>
      </a>
    </div>
  );
};

export default FloatingContact;
