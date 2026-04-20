import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[--background]/72 backdrop-blur-xl border-b border-[--border]">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[--primary] rounded-lg flex items-center justify-center">
            <span className="text-[--background] font-bold">S</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">SellFlow AI</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#shadow" className="text-sm hover:text-[--primary] transition">Shadow Mode</a>
          <a href="#how" className="text-sm hover:text-[--primary] transition">작동 방식</a>
          <a href="#pricing" className="text-sm hover:text-[--primary] transition">성과 수수료</a>
          <a href="#faq" className="text-sm hover:text-[--primary] transition">FAQ</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <button className="hidden md:block btn-primary text-sm">
          데모 보기
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[--border] bg-[--background]/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-4">
            <a href="#shadow" className="text-sm hover:text-[--primary]">Shadow Mode</a>
            <a href="#how" className="text-sm hover:text-[--primary]">작동 방식</a>
            <a href="#pricing" className="text-sm hover:text-[--primary]">성과 수수료</a>
            <a href="#faq" className="text-sm hover:text-[--primary]">FAQ</a>
            <button className="btn-primary text-sm w-full">데모 보기</button>
          </nav>
        </div>
      )}
    </header>
  )
}
