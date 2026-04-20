import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[--border] bg-white/6 text-sm">
              🔒 SHADOW MODE 시뮬레이션
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              광고비 쓰기 전에,<br />
              <span className="text-[--primary]">AI가 먼저 검증</span>
            </h1>

            <p className="text-lg text-[--muted] mb-8 leading-relaxed">
              쿠팡 초보 셀러의 광고비 낭비 공포에서 벗어나세요. 
              Shadow Mode가 실제 돈을 쓰기 전에 수천 번 시뮬레이션해서 
              정확한 ROAS와 매출을 미리 보여줍니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary flex items-center justify-center gap-2">
                내 상품 미리 보기 <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                데모 보기
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[--primary]" />
                <span className="text-sm">기존 ROAS 180% → AI 예측 240% (실제 사례)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[--primary]" />
                <span className="text-sm">광고비 10% 성과 수수료만 (리스크 제로)</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="glass-card aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block px-4 py-2 rounded-lg bg-[--primary]/10 border border-[--primary]/30 mb-4">
                  <span className="text-[--primary] font-semibold">Dashboard Preview</span>
                </div>
                <p className="text-[--muted]">대시보드 이미지 영역</p>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="absolute -bottom-6 -left-4 glass-card p-4 max-w-xs">
              <div className="text-sm text-[--muted] mb-2">Current</div>
              <div className="text-2xl font-bold">ROAS 180%</div>
              <div className="text-xs text-[--muted] mt-1">월 매출 1,240만</div>
            </div>

            <div className="absolute -bottom-6 -right-4 glass-card p-4 max-w-xs border-[--primary]/30">
              <div className="text-sm text-[--primary] mb-2">AI Prediction</div>
              <div className="text-2xl font-bold text-[--primary]">ROAS 240%</div>
              <div className="text-xs text-[--muted] mt-1">예상 매출 1.8M KRW · Confidence 92%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
