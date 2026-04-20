export default function Footer() {
  return (
    <footer className="border-t border-[--border] py-12 px-4">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold mb-4">SellFlow AI</div>
            <p className="text-sm text-[--muted]">
              쿠팡 초보 셀러를 위한 AI 자동화 플랫폼
            </p>
          </div>
          <div>
            <div className="font-semibold mb-4">제품</div>
            <ul className="space-y-2 text-sm text-[--muted]">
              <li><a href="#" className="hover:text-[--primary]">Shadow Mode</a></li>
              <li><a href="#" className="hover:text-[--primary]">자동화</a></li>
              <li><a href="#" className="hover:text-[--primary]">분석</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">회사</div>
            <ul className="space-y-2 text-sm text-[--muted]">
              <li><a href="#" className="hover:text-[--primary]">블로그</a></li>
              <li><a href="#" className="hover:text-[--primary]">문의</a></li>
              <li><a href="#" className="hover:text-[--primary]">채용</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4">법률</div>
            <ul className="space-y-2 text-sm text-[--muted]">
              <li><a href="#" className="hover:text-[--primary]">이용약관</a></li>
              <li><a href="#" className="hover:text-[--primary]">개인정보</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[--border] pt-8 text-center text-sm text-[--muted]">
          <p>&copy; 2026 SellFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
