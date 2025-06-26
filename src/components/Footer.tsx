import { Phone, MapPin, Clock, Mail, Recycle } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">
                {t("about.companyName")}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>{t("footer.phoneInquiry")}</span>
              </a>
              <a
                href="http://pf.kakao.com/_example"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition-colors font-semibold"
              >
                {t("footer.kakaoConsult")}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("contact.contactInfo")}
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p>{t("contact.info.phoneValue")}</p>
                  <p className="text-sm">{t("contact.directLine")}</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p>{t("contact.info.addressValue")}</p>
                  <a
                    href="https://map.naver.com/p/search/%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90/place/1665822514?c=15.00,0,0,0,dh&placePath=/home?entry=bmp&from=map&fromPanelNum=2&timestamp=202506261509&locale=ko&svcName=map_pcv5&searchText=%EC%B0%BD%EB%8C%80%EC%9E%90%EC%9B%90"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.viewMap")}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p>{t("contact.info.emailValue")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("contact.businessHours")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{t("contact.info.weekdayHours")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{t("contact.info.saturdayHours")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span>{t("contact.info.sundayHours")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{t("footer.copyright")}</p>
          <p className="mt-1">{t("footer.businessNumber")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
