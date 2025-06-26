import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const FloatingContact = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* KakaoTalk Button */}
      <a
        href="http://pf.kakao.com/_example"
        className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="카카오톡 상담"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${t("contact.info.phoneValue")}`}
        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse"
        title="전화 걸기"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingContact;
