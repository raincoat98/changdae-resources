import { Phone, ClipboardCheck, Banknote } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Phone className="w-7 h-7" />,
    title: "전화 또는 카카오톡 문의",
    description:
      "보유하신 고철·비철 물품이나 철거 현장에 대해 간략히 알려주세요. 즉시 상담해드립니다.",
    badge: "빠른 응답",
    color: "bg-blue-600 shadow-blue-600/30",
  },
  {
    step: "02",
    icon: <ClipboardCheck className="w-7 h-7" />,
    title: "전문가 무료 방문 견적",
    description:
      "전문가가 직접 방문해 정확한 중량 측정과 현장 상태를 확인 후 최적의 견적을 제시합니다.",
    badge: "무료 방문",
    color: "bg-amber-500 shadow-amber-500/30",
  },
  {
    step: "03",
    icon: <Banknote className="w-7 h-7" />,
    title: "즉시 수거 · 현금 바로 지급",
    description:
      "협의 완료 즉시 수거를 진행하고 현금으로 바로 지급합니다. 번거로운 절차가 없습니다.",
    badge: "당일 완료",
    color: "bg-emerald-600 shadow-emerald-600/30",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            간편한 3단계
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4">
            어떻게 진행되나요?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            복잡한 절차 없이 전화 한 통으로 시작하세요.
            <br className="hidden sm:block" />
            당일 처리가 기본입니다.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(33.33%+2rem)] right-[calc(33.33%+2rem)] h-0.5 bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-200" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all duration-300 card-hover animate-slide-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Icon + number */}
              <div className="relative inline-block mb-6">
                <div
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  {step.icon}
                </div>
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">
                  {step.step}
                </div>
              </div>

              {/* Badge */}
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-0.5 text-xs font-bold mb-3">
                ✓ {step.badge}
              </span>

              <h3 className="text-lg font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:010-9121-8579"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            지금 바로 시작하기
          </a>
          <p className="text-slate-400 text-sm mt-3">
            무료 견적 · 부담 없음 · 즉시 상담
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
