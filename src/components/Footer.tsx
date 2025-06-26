import React from 'react';
import { Phone, MapPin, Clock, Mail, Recycle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">서울재활용센터</span>
            </div>
            <p className="text-gray-300 mb-4">
              고철, 비철, 알루미늄, 동 등 모든 재활용품을 최고가로 매입합니다.<br />
              건물철거, 공장정리, 폐기물 수거까지 원스톱 서비스를 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="tel:010-1234-5678" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>전화 문의</span>
              </a>
              <a href="http://pf.kakao.com/_example" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition-colors font-semibold">
                카카오톡 상담
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처 정보</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p>010-1234-5678</p>
                  <p className="text-sm">대표 직통</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p>서울시 강남구 테헤란로 123</p>
                  <a href="https://map.naver.com" className="text-blue-400 hover:text-blue-300 text-sm">네이버 지도 보기</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 text-blue-400" />
                <div>
                  <p>info@seoulrecycle.co.kr</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">영업시간</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>평일: 08:00 - 18:00</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>토요일: 08:00 - 15:00</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span>일요일: 휴무</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 서울재활용센터. All rights reserved.</p>
          <p className="mt-1">사업자등록번호: 123-45-67890 | 대표: 김철수</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;