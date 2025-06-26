import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Recycle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '홈', href: '/' },
    { name: '회사소개', href: '/about' },
    { name: '시세정보', href: '/pricing' },
    { name: '문의하기', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📍 서울시 강남구 테헤란로 123</span>
            <span>⏰ 평일 08:00-18:00 / 토요일 08:00-15:00</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <a href="tel:010-1234-5678" className="font-semibold hover:text-yellow-300 transition-colors">
              010-1234-5678
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">서울재활용센터</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:010-1234-5678"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>지금 전화</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:010-1234-5678"
                className="block w-full text-center bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-4"
              >
                📞 010-1234-5678 지금 전화
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;