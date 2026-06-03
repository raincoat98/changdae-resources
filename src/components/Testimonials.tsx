import { Star } from "lucide-react";

const testimonials = [
  {
    name: "김*규",
    company: "강남구 A공장 대표",
    rating: 5,
    text: "공장 이전하면서 오래된 기계들을 처리해야 했는데, 당일 방문에 시세도 타업체보다 높게 쳐주셨어요. 다음에도 꼭 이용할게요.",
    tag: "공장 정리",
  },
  {
    name: "박*영",
    company: "경기 광주 건축업",
    rating: 5,
    text: "건물 철거 맡겼는데 허가부터 마무리까지 원스톱으로 처리해주셔서 정말 편했습니다. 안전하게 깔끔하게 해주셔서 감사해요.",
    tag: "건물 철거",
  },
  {
    name: "이*호",
    company: "수원 개인사업자",
    rating: 5,
    text: "고철이 꽤 많이 쌓여있었는데 전화하니 다음날 바로 오셔서 처리해주셨어요. 현금 즉시 지급도 정말 좋았습니다.",
    tag: "고철 매입",
  },
];

const trustStats = [
  { icon: "★", color: "text-amber-400", label: "평균 만족도 4.9/5" },
  { icon: "✓", color: "text-emerald-500", label: "1,000+ 거래 완료" },
  { icon: "♻", color: "text-blue-500", label: "17년 무사고 운영" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
            고객 후기
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4">
            실제 고객의 이야기
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            17년간 1,000명 이상의 고객이 선택한 이유를 들어보세요
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 card-hover animate-slide-in-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Tag */}
              <span className="inline-block text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-0.5 rounded-full mb-4">
                {item.tag}
              </span>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                  <div className="text-slate-400 text-xs">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center gap-10 mt-12 pt-10 border-t border-slate-100">
          {trustStats.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
              <span className={`${s.color} font-black text-xl`}>{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
