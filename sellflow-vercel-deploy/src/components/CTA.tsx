import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-white/2">
      <div className="container">
        <div className="glass-card p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            지금 시작하세요
          </h2>
          <p className="text-[--muted] mb-8 text-lg">
            Shadow Mode로 광고비 낭비를 멈추고, 
            AI가 최적화한 매출을 경험하세요.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Check size={20} className="text-[--primary]" />
              <span>무료 상담 (15분)</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Check size={20} className="text-[--primary]" />
              <span>Shadow Mode 데모 체험</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Check size={20} className="text-[--primary]" />
              <span>맞춤형 전략 제안</span>
            </div>
          </div>

          <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            지금 데모 신청 <ArrowRight size={20} />
          </button>

          <p className="text-xs text-[--muted] mt-6">
            신용카드 없이 시작할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
