import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
        <Globe size={16} />
        <span className="text-sm font-medium">
          {i18n.language === "ko" ? "한국어" : "English"}
        </span>
      </button>

      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          <button
            onClick={() => changeLanguage("ko")}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
              i18n.language === "ko"
                ? "text-green-600 font-medium"
                : "text-gray-700"
            }`}
          >
            한국어
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
              i18n.language === "en"
                ? "text-green-600 font-medium"
                : "text-gray-700"
            }`}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
