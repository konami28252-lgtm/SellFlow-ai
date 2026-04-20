import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Shadow Mode는 정말 정확한가요?',
    a: '네. AI가 5,000회 이상의 시뮬레이션을 통해 92% 이상의 정확도로 예측합니다. 실제 사용자 데이터와 쿠팡 알고리즘을 기반으로 학습했습니다.'
  },
  {
    q: '광고비는 별도로 내야 하나요?',
    a: '네, 광고비는 쿠팡에 직접 지불합니다. SellFlow AI는 기본 구독료(₩99K)와 매출 증가분의 10% 수수료만 받습니다.'
  },
  {
    q: '만약 ROAS가 낮으면?',
    a: '성과 수수료 모델이므로 ROAS가 낮으면 수수료도 적습니다. 리스크가 거의 없습니다.'
  },
  {
    q: '초보자도 사용할 수 있나요?',
    a: '물론입니다. 상품 발굴부터 광고 집행까지 모두 자동이므로 쿠팡 경험이 없어도 괜찮습니다.'
  },
  {
    q: '계약 기간이 있나요?',
    a: '아니요. 언제든 취소할 수 있습니다. 최소 계약 기간이 없습니다.'
  },
  {
    q: '다른 판매채널도 지원하나요?',
    a: '현재는 쿠팡 전용입니다. 향후 네이버 스마트스토어, 11번가 등으로 확대할 예정입니다.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">자주 묻는 질문</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 px-6 hover:bg-white/5 transition"
              >
                <span className="font-semibold text-left">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-[--muted] border-t border-[--border] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
