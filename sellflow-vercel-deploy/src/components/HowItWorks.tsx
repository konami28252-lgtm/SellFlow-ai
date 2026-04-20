import { Upload, Zap, BarChart3, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    number: '1',
    title: '상품 발굴',
    description: '쿠팡 트렌드 데이터로 팔릴 상품 자동 추천'
  },
  {
    icon: Zap,
    number: '2',
    title: '상세페이지 생성',
    description: 'AI가 고객 심리 기반 카피 & 이미지 자동 제작'
  },
  {
    icon: BarChart3,
    number: '3',
    title: 'Shadow Mode 시뮬레이션',
    description: '광고 세팅 전에 수천 번 테스트 & 최적화'
  },
  {
    icon: CheckCircle,
    number: '4',
    title: '자동 집행 & 모니터링',
    description: '승인 후 쿠팡에 자동 적용, 24/7 최적화'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-4 bg-white/2">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">4단계 작동 방식</h2>
          <p className="text-[--muted] max-w-2xl mx-auto">
            상품 발굴부터 광고 집행까지, 모든 게 자동입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                <div className="glass-card h-full">
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[--primary] text-[--background] flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="pt-8">
                    <Icon size={32} className="text-[--primary] mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-[--muted]">{step.description}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-12 text-[--primary] text-2xl">→</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
