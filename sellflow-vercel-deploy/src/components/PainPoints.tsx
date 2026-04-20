import { AlertCircle, TrendingDown, Clock } from 'lucide-react'

const painPoints = [
  {
    icon: AlertCircle,
    title: '광고비가 무섭게 날아감',
    description: '매일 ROAS 확인하고 예산 조정하는 귀찮음. 한 번의 잘못된 설정이 수백만 원 손실로 이어진다.',
    log: '> 예산 초과 감지: -₩450,000'
  },
  {
    icon: TrendingDown,
    title: '상품 테스트 실패로 시간 낭비',
    description: '어떤 상품이 팔릴지 알 수 없어서 무작정 광고를 돌린다. 실패하면 처음부터 다시 시작.',
    log: '> 테스트 상품 ROAS 45% (실패)'
  },
  {
    icon: Clock,
    title: '매일 수동으로 최적화해야 함',
    description: '쿠팡 광고 대행사 비용은 비싸고, 직접 관리하면 본업에 집중할 수 없다.',
    log: '> 수동 최적화 완료: 2시간 소요'
  }
]

export default function PainPoints() {
  return (
    <section className="py-20 px-4 bg-white/2">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">쿠팡 초보 셀러의 고통</h2>
          <p className="text-[--muted] max-w-2xl mx-auto">
            직장인 부업러들이 매일 겪는 현실. SellFlow AI가 해결합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <div key={idx} className="glass-card group hover:border-[--primary]/30 transition">
                <div className="w-12 h-12 rounded-lg bg-[--primary]/10 flex items-center justify-center mb-4 group-hover:bg-[--primary]/20 transition">
                  <Icon size={24} className="text-[--primary]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-[--muted] text-sm mb-4 leading-relaxed">{point.description}</p>
                <div className="text-xs font-mono text-[--muted]/50 bg-black/20 p-2 rounded">
                  {point.log}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
