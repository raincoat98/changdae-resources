import { Phone, MapPin, Clock, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">창대</span>
              </div>
              <div>
                <div className="text-white font-black text-lg leading-tight">창대자원</div>
                <div className="text-slate-500 text-xs">고철·비철·철거 전문</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t("footer.phoneInquiry")}
              </a>
              <a
                href="http://pf.kakao.com/_example"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                {t("footer.kakaoConsult")}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">
              {t("contact.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200 text-sm font-semibold">
                    {t("contact.info.phoneValue")}
                  </p>
                  <p className="text-slate-500 text-xs">{t("contact.directLine")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-200 text-sm">{t("contact.info.addressValue")}</p>
                  <a
                    href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
                    className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.viewMap")} →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-slate-200 text-sm">{t("contact.info.emailValue")}</p>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-wide">
              {t("contact.businessHours")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-200">{t("contact.info.weekdayHours")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-200">{t("contact.info.saturdayHours")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="text-slate-500">{t("contact.info.sundayHours")}</span>
              </li>
            </ul>

            <div className="mt-6 bg-amber-400/10 border border-amber-400/20 rounded-xl p-3">
              <p className="text-amber-400 text-xs font-bold">긴급 상황 시</p>
              <p className="text-slate-400 text-xs mt-0.5">영업시간 내 전화 문의 가능합니다</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 pb-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600 sm:pr-44">
          <div>
            <p>{t("footer.copyright")}</p>
            <p className="mt-0.5">{t("footer.businessNumber")}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-400 transition-colors">
              회사소개
            </Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
