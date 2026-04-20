export default function Outcomes() {
  const outcomes = [
    {
      metric: '+60%',
      description: '평균 ROAS 상승'
    },
    {
      metric: '-70%',
      description: '광고 실패율 감소'
    },
    {
      metric: '5배',
      description: '시간 절약'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white/2">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">예상 결과</h2>
          <p className="text-[--muted] max-w-2xl mx-auto">
            SellFlow AI를 사용한 초보 셀러들의 평균 성과
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <div key={idx} className="glass-card text-center">
              <div className="text-5xl font-bold text-[--primary] mb-4">{item.metric}</div>
              <div className="text-lg font-semibold">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-8">
          <h3 className="text-2xl font-bold mb-6">실제 사용자 사례</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[--primary] pl-6">
              <div className="font-semibold mb-2">김민준 (직장인 부업러)</div>
              <div className="text-sm text-[--muted] mb-3">
                "Shadow Mode 덕분에 첫 달부터 ROAS 180%에서 240%로 올렸어요. 
                광고비도 절반으로 줄였는데 매출은 더 늘었습니다."
              </div>
              <div className="text-xs text-[--muted]">월 매출 ₩1.2M → ₩1.8M</div>
            </div>

            <div className="border-l-4 border-[--primary] pl-6">
              <div className="font-semibold mb-2">이수진 (쿠팡 초보 셀러)</div>
              <div className="text-sm text-[--muted] mb-3">
                "AI가 자동으로 상품을 찾아주고 광고까지 최적화해줘서 
                본업에만 집중할 수 있게 됐어요."
              </div>
              <div className="text-xs text-[--muted]">주 20시간 → 2시간 관리</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
