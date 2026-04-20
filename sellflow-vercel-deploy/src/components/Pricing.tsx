import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">성과 수수료 모델</h2>
          <p className="text-[--muted] max-w-2xl mx-auto">
            리스크 제로. 당신이 돈을 버는 만큼만 우리도 번다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold mb-6">기존 광고 대행</h3>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="text-red-400">✗</div>
                <div>
                  <div className="font-semibold">고정 월 대행료</div>
                  <div className="text-sm text-[--muted]">₩500K ~ ₩2M (결과 무관)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-red-400">✗</div>
                <div>
                  <div className="font-semibold">광고비 별도</div>
                  <div className="text-sm text-[--muted]">₩1M ~ ₩5M (매달 지출)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-red-400">✗</div>
                <div>
                  <div className="font-semibold">실패해도 비용 지불</div>
                  <div className="text-sm text-[--muted]">ROAS 낮아도 대행료는 동일</div>
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-red-400">월 ₩1.5M ~ ₩7M</div>
          </div>

          {/* SellFlow */}
          <div className="glass-card border-[--primary]/30 bg-[--primary]/5">
            <div className="inline-block px-3 py-1 rounded-full bg-[--primary]/20 text-[--primary] text-xs font-bold mb-4">
              추천
            </div>
            <h3 className="text-2xl font-bold mb-6">SellFlow AI</h3>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Check size={20} className="text-[--primary] flex-shrink-0" />
                <div>
                  <div className="font-semibold">저가 기본 구독</div>
                  <div className="text-sm text-[--muted]">₩99K/월 (무제한 사용)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Check size={20} className="text-[--primary] flex-shrink-0" />
                <div>
                  <div className="font-semibold">성과 수수료만</div>
                  <div className="text-sm text-[--muted]">매출 증가분의 10%만</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Check size={20} className="text-[--primary] flex-shrink-0" />
                <div>
                  <div className="font-semibold">리스크 제로</div>
                  <div className="text-sm text-[--muted]">실패하면 수수료 없음</div>
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-[--primary]">
              ₩99K + 성과 수수료 10%
            </div>
          </div>
        </div>

        <div className="mt-12 glass-card p-8 text-center">
          <h4 className="font-bold text-lg mb-3">💰 예상 절감액</h4>
          <p className="text-[--muted] mb-4">
            기존: 월 ₩3M 대행료 + ₩2M 광고비 = ₩5M<br />
            SellFlow: ₩99K + 성과 수수료 (실제 결과 기반)
          </p>
          <div className="text-3xl font-bold text-[--primary]">
            월 ₩4M 이상 절감 가능
          </div>
        </div>
      </div>
    </section>
  )
}
