import { CheckCircle, Zap } from 'lucide-react'

export default function ShadowMode() {
  return (
    <section id="shadow" className="py-20 px-4">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-sm">
              ⚡ 핵심 차별점
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Shadow Mode:<br />
              <span className="text-[--primary]">실행 전 검증</span>
            </h2>

            <p className="text-[--muted] mb-8 leading-relaxed">
              실제 쿠팡에 광고를 집행하기 전에 AI가 당신의 상품, 예산, 타겟을 
              수천 번 시뮬레이션합니다. 예상 ROAS, 월 매출, 신뢰도를 정확히 본 후 
              '승인' 버튼만 누르면 자동 적용됩니다.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[--primary] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">기존 ROAS vs AI 예측 ROAS 비교</div>
                  <div className="text-sm text-[--muted]">180% → 240% 상승 가능성 확인</div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[--primary] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">예상 월 매출 & 신뢰도 표시</div>
                  <div className="text-sm text-[--muted]">1.8M KRW, Confidence 92%</div>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[--primary] flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">승인 전 변경 예정값 공개</div>
                  <div className="text-sm text-[--muted]">예산 배분, 타겟 조정 내역 미리 확인</div>
                </div>
              </div>
            </div>

            <button className="btn-primary flex items-center gap-2">
              <Zap size={18} />
              Shadow Mode 체험하기
            </button>
          </div>

          {/* Right */}
          <div className="glass-card p-8">
            <div className="space-y-6">
              <div className="border-b border-[--border] pb-6">
                <div className="text-sm text-[--muted] mb-2">CURRENT</div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-3xl font-bold">ROAS 180%</div>
                    <div className="text-sm text-[--muted]">광고비 ₩1M</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₩1.24M</div>
                    <div className="text-xs text-[--muted]">월 매출</div>
                  </div>
                </div>
              </div>

              <div className="bg-[--primary]/5 border border-[--primary]/20 rounded-xl p-4 mb-6">
                <div className="text-sm text-[--primary] font-semibold mb-2">✨ AI PREDICTION</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-bold text-[--primary]">ROAS 240%</div>
                    <div className="text-sm text-[--muted]">추천 예산 ₩1.2M</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[--primary]">₩1.8M</div>
                    <div className="text-xs text-[--muted]">예상 월 매출</div>
                  </div>
                </div>
                <div className="mt-3 text-xs text-[--muted]">Confidence: 92% · 시뮬레이션 5,000회</div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-6">
                <div className="text-sm font-semibold text-[--accent]">
                  💡 예상 수익 증가: +₩560,000/월
                </div>
              </div>

              <button className="w-full bg-[--primary] text-[--background] font-bold py-3 rounded-lg hover:bg-[--primary-dark] transition">
                승인하고 실제 적용
              </button>
              <button className="w-full btn-secondary">
                설정 다시 조정
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
