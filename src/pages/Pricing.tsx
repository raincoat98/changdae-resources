import React, { useState } from 'react';
import { TrendingUp, Calendar, RefreshCw, Calculator, Phone, AlertCircle } from 'lucide-react';

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('ferrous');

  const categories = [
    { id: 'ferrous', name: '철계 금속 (고철)', icon: '🔩' },
    { id: 'non-ferrous', name: '비철 금속', icon: '🥉' },
    { id: 'special', name: '특수 금속', icon: '⚡' },
    { id: 'electronic', name: '전자 부품', icon: '💻' }
  ];

  const priceData = {
    ferrous: [
      { name: '고철 (Heavy Steel)', price: '450', unit: '원/kg', change: '+5', trend: 'up', description: '두꺼운 철판, 형강 등' },
      { name: '경량철 (Light Steel)', price: '380', unit: '원/kg', change: '+3', trend: 'up', description: '얇은 철판, 캔류 등' },
      { name: '주철 (Cast Iron)', price: '420', unit: '원/kg', change: '+8', trend: 'up', description: '맨홀뚜껑, 주물 등' },
      { name: '가전철 (Appliance Steel)', price: '400', unit: '원/kg', change: '±0', trend: 'stable', description: '냉장고, 세탁기 등' },
      { name: '자동차철 (Auto Steel)', price: '480', unit: '원/kg', change: '+12', trend: 'up', description: '자동차 부품류' },
      { name: '건축철 (Construction Steel)', price: '460', unit: '원/kg', change: '+7', trend: 'up', description: '철근, 빔 등' }
    ],
    'non-ferrous': [
      { name: '동 (Copper)', price: '8,500', unit: '원/kg', change: '-100', trend: 'down', description: '순동, 동선 등' },
      { name: '알루미늄 (Aluminum)', price: '2,800', unit: '원/kg', change: '+50', trend: 'up', description: '알루미늄 판재, 캔 등' },
      { name: '황동 (Brass)', price: '6,200', unit: '원/kg', change: '+80', trend: 'up', description: '수도꼭지, 밸브 등' },
      { name: '청동 (Bronze)', price: '7,100', unit: '원/kg', change: '+45', trend: 'up', description: '동상, 장식품 등' },
      { name: '납 (Lead)', price: '2,100', unit: '원/kg', change: '±0', trend: 'stable', description: '배터리, 납판 등' },
      { name: '아연 (Zinc)', price: '2,400', unit: '원/kg', change: '+15', trend: 'up', description: '아연 도금판 등' }
    ],
    special: [
      { name: '스테인리스 304', price: '1,200', unit: '원/kg', change: '+20', trend: 'up', description: '주방용품, 배관재 등' },
      { name: '스테인리스 316', price: '1,800', unit: '원/kg', change: '+35', trend: 'up', description: '화학 장비용' },
      { name: '니켈 (Nickel)', price: '15,000', unit: '원/kg', change: '+200', trend: 'up', description: '배터리, 합금 등' },
      { name: '티타늄 (Titanium)', price: '12,000', unit: '원/kg', change: '+150', trend: 'up', description: '항공 부품 등' },
      { name: '몰리브덴 (Molybdenum)', price: '25,000', unit: '원/kg', change: '+500', trend: 'up', description: '특수 합금용' },
      { name: '텅스텐 (Tungsten)', price: '35,000', unit: '원/kg', change: '+800', trend: 'up', description: '공구강, 전극 등' }
    ],
    electronic: [
      { name: 'CPU (구형)', price: '180,000', unit: '원/kg', change: '+2000', trend: 'up', description: '구형 컴퓨터 CPU' },
      { name: 'RAM (메모리)', price: '45,000', unit: '원/kg', change: '+1000', trend: 'up', description: '컴퓨터 메모리' },
      { name: '회로기판 (고급)', price: '8,500', unit: '원/kg', change: '+150', trend: 'up', description: '금이 포함된 기판' },
      { name: '회로기판 (일반)', price: '2,800', unit: '원/kg', change: '+50', trend: 'up', description: '일반 전자기기 기판' },
      { name: '전선 (구리)', price: '6,500', unit: '원/kg', change: '+80', trend: 'up', description: '구리 전선류' },
      { name: '변압기', price: '3,200', unit: '원/kg', change: '+40', trend: 'up', description: '전력용 변압기' }
    ]
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '➡️';
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="w-10 h-10" />
              <h1 className="text-4xl font-bold">실시간 시세 정보</h1>
            </div>
            <p className="text-xl text-green-100 mb-6">
              매일 업데이트되는 최신 금속 시세를 확인하세요
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>최종 업데이트: {new Date().toLocaleDateString('ko-KR')} 09:00</span>
              </div>
              <div className="flex items-center space-x-1">
                <RefreshCw className="w-4 h-4" />
                <span>매일 오전 9시 업데이트</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-yellow-400 text-black py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">
              🔥 이번 주 특별 시세! 알루미늄 +50원/kg, 황동 +80원/kg 상승 중!
            </span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceData[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <span className="text-2xl">{getTrendIcon(item.trend)}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="text-3xl font-bold text-blue-600">{item.price}</span>
                    <span className="text-gray-600">{item.unit}</span>
                  </div>
                  
                  <div className={`text-sm font-medium ${getTrendColor(item.trend)}`}>
                    전일 대비: {item.change}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-500">현재 시세</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    견적 문의
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Calculator className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">간단 시세 계산기</h2>
              <p className="text-gray-600">대략적인 매입 금액을 미리 계산해보세요</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">품목 선택</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>고철 (450원/kg)</option>
                    <option>알루미늄 (2,800원/kg)</option>
                    <option>동 (8,500원/kg)</option>
                    <option>스테인리스 (1,200원/kg)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">중량 (kg)</label>
                  <input
                    type="number"
                    placeholder="중량을 입력하세요"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    계산하기
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-600">예상 매입 금액: </span>
                <span className="text-2xl font-bold text-blue-600">0원</span>
                <p className="text-xs text-gray-500 mt-2">
                  * 실제 매입가는 품질, 순도 등에 따라 달라질 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">시세 안내사항</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ 시세 적용 원칙</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 매일 오전 9시 시세 업데이트</li>
                <li>• 중량 측정 시 고객 입회 가능</li>
                <li>• 투명한 가격 계산 과정 공개</li>
                <li>• 현금 즉시 지급</li>
                <li>• 정확한 디지털 저울 사용</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 매입 조건</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 최소 매입량: 10kg 이상</li>
                <li>• 혼입물 제거 후 측정</li>
                <li>• 신분증 확인 필수</li>
                <li>• 도난품 매입 절대 불가</li>
                <li>• 방사능 검사 후 매입</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">정확한 견적이 필요하신가요?</h2>
          <p className="text-xl text-green-100 mb-8">
            전화 한 통으로 전문가가 직접 방문하여 정확한 견적을 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>전화 견적: 010-1234-5678</span>
            </a>
            <a
              href="http://pf.kakao.com/_example"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              카카오톡 문의
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-green-100">
              💰 첫 방문 고객 <span className="text-yellow-300 font-bold">시세 우대</span> + 
              <span className="text-yellow-300 font-bold"> 운반비 할인</span> 혜택!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;