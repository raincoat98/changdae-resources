import React from 'react';
import { Phone, TrendingUp, Truck, Building2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-yellow-300">최고가 매입</span><br />
              고철·비철 전문
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              실시간 시세 확인 | 당일 방문 견적<br />
              철거·공장정리·폐기물 수거까지
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="tel:010-1234-5678"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>지금 전화 010-1234-5678</span>
              </a>
              <a
                href="http://pf.kakao.com/_example"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                카카오톡 빠른상담
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-semibold">실시간 시세</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <Truck className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-semibold">당일 수거</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
                <Building2 className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-semibold">철거 전문</p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-sm text-blue-100">년 경험</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1,000+</div>
              <div className="text-sm text-blue-100">고객 만족</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24H</div>
              <div className="text-sm text-blue-100">빠른 대응</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-sm text-blue-100">정직 거래</div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA Banner */}
      <div className="bg-red-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-bold text-lg">
            🚨 긴급 철거·대량 수거 24시간 대응 가능! 
            <a href="tel:010-1234-5678" className="ml-2 underline hover:text-yellow-300">
              지금 전화하세요 →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;