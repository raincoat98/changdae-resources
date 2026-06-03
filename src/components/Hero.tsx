import { Phone, ChevronRight, TrendingUp, Truck, Building2, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "17+", label: "년 경험" },
    { value: "1,000+", label: "고객 만족" },
    { value: "500+", label: "철거 프로젝트" },
    { value: "당일", label: "방문 처리" },
  ];

  const badges = [
    { icon: <Shield className="w-3.5 h-3.5" />, text: "폐기물처리업 허가" },
    { icon: <TrendingUp className="w-3.5 h-3.5" />, text: "실시간 시세 적용" },
    { icon: <Truck className="w-3.5 h-3.5" />, text: "당일 방문 수거" },
    { icon: <Building2 className="w-3.5 h-3.5" />, text: "철거업 정식 등록" },
  ];

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
      <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-l from-blue-600/8 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left ── */}
          <div>
            {/* Online badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-7 animate-fade-in">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-semibold">
                2009년 창업 · 경기 광주 17년 신뢰
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
              <span className="text-white">고철·비철</span>
              <br />
              <span className="text-shimmer">최고가 매입</span>
              <br />
              <span className="text-slate-300 text-4xl lg:text-5xl">+ 철거 전문</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-9 max-w-lg animate-fade-in-up animation-delay-200">
              실시간 시세 적용, 정확한 중량 측정, 현금 즉시 지급.
              <br className="hidden sm:block" />
              17년 경력 전문가가 최상의 조건을 제안합니다.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up animation-delay-300">
              <a
                href={`tel:${t("contact.info.phoneValue")}`}
                className="flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-400/30 hover:-translate-y-0.5 animate-pulse-ring"
              >
                <Phone className="w-5 h-5" />
                무료 견적 전화
              </a>
              <a
                href="/about"
                className="flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-slate-800/80"
              >
                회사 소개 보기
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 animate-fade-in-up animation-delay-400">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10 transition-colors"
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="space-y-4 animate-fade-in-up animation-delay-300">
            {/* Contact card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-white font-bold text-lg">지금 바로 문의하세요</h3>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  영업시간 내 응답
                </span>
              </div>
              <div className="space-y-3">
                <a
                  href={`tel:${t("contact.info.phoneValue")}`}
                  className="flex items-center justify-between bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl p-4 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-950/15 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-black text-sm">전화 문의</div>
                      <div className="text-xs opacity-70">{t("contact.info.phoneValue")}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="http://pf.kakao.com/_example"
                  className="flex items-center justify-between bg-yellow-300/90 hover:bg-yellow-300 text-slate-950 rounded-xl p-4 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-950/15 rounded-lg flex items-center justify-center text-xl">
                      💬
                    </div>
                    <div>
                      <div className="font-black text-sm">카카오톡 상담</div>
                      <div className="text-xs opacity-70">빠른 답변 보장</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="text-slate-500 text-xs text-center mt-4">
                📍 {t("contact.info.addressValue")}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 text-center animate-count-up card-hover"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className="text-3xl font-black text-amber-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Value proposition strip */}
      <div className="bg-amber-400 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-1 text-sm font-bold">
            {["무료 방문 견적", "현금 즉시 지급", "당일 수거 가능", "허가증 완비", "정직한 거래"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-slate-950/60">✓</span> {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
