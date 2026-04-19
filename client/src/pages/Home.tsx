/*
  SellFlow AI Design Reminder
  Cybernetic operations room aesthetic for beginner Coupang sellers.
  Mobile-first responsive design optimized for Vercel deployment.
*/

import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  ChevronRight,
  CircleDollarSign,
  LayoutTemplate,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663574118976/63FJKfj3oaUkUHjw7WMbpT/sellflow-hero-dashboard-CtBkzeNUV4Jk9JuottXxp4.webp";
const shadowImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663574118976/63FJKfj3oaUkUHjw7WMbpT/sellflow-shadowmode-panel-2-642sU4PJCKqJPhdjWNEBqo.webp";
const workflowImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663574118976/63FJKfj3oaUkUHjw7WMbpT/sellflow-workflow-cards-2-QHR5WumsqHDH75wbWCbrFM.webp";

const heroHeadlines = [
  "광고비 쓰기 전에, AI가 먼저 수천 번 돌려보고 이길 확률부터 보여줍니다.",
  "쿠팡 광고비가 무서운 초보 셀러를 위해, 먼저 시뮬레이션하고 나중에 실행합니다.",
  "덜 일하고 더 벌고 싶다면, 감으로 광고하지 말고 Shadow Mode로 먼저 검증하세요.",
];

const painCards = [
  {
    icon: TriangleAlert,
    title: "광고비가 타는 느낌",
    copy:
      "어느 키워드가 먹히는지, 어떤 상품이 예산을 잡아먹는지 모르겠는데 돈은 계속 빠져나갑니다.",
  },
  {
    icon: BarChart3,
    title: "매일 ROAS 확인하는 피로",
    copy:
      "출근 전, 점심, 퇴근 후. 숫자는 보는데 무엇을 바꿔야 하는지는 여전히 막막합니다.",
  },
  {
    icon: Radar,
    title: "상품 테스트 실패의 시간 낭비",
    copy:
      "상품 소싱, 상세페이지, 광고 세팅까지 다 했는데 반응이 없으면 남는 건 학습보다 피곤함입니다.",
  },
];

const logs = [
  "시뮬레이션 시작",
  "최근 14일 판매·광고 데이터 분석 완료",
  "예산 조합 3,842개 가상 테스트 완료",
  "저효율 상품 2개 탐지, 예산 누수 구간 식별",
  "예상 ROAS +33%, 예상 매출 +37% 시나리오 도출",
  "승인 대기 상태로 전환",
];

const steps = [
  {
    icon: SearchCheck,
    title: "상품 추천",
    copy:
      "수요 신호, 경쟁 강도, 마진 가능성을 읽어 초보 셀러가 테스트할 만한 상품 후보를 먼저 좁혀줍니다.",
  },
  {
    icon: LayoutTemplate,
    title: "상세페이지 생성",
    copy:
      "추천 상품의 판매 포인트를 바탕으로 전환 중심 구조의 상세페이지 초안을 빠르게 만듭니다.",
  },
  {
    icon: ShieldCheck,
    title: "Shadow 시뮬레이션",
    copy:
      "광고 세팅과 예산 배분을 가상으로 수천 번 돌려본 뒤 기존 성과 대비 변화폭을 숫자로 보여줍니다.",
  },
  {
    icon: Bot,
    title: "승인 & 실행",
    copy:
      "결과를 확인한 사용자가 승인 버튼만 누르면 준비된 세팅이 실제 쿠팡 운영에 반영됩니다.",
  },
];

const pricingPoints = [
  ["시작 비용 부담", "높거나 불투명함", "낮은 기본 구독"],
  ["성과 전 비용 체감", "먼저 많이 냄", "성과가 나야 추가 과금"],
  ["초보 셀러 심리", "또 돈만 나갈까 봐 걱정", "늘어난 만큼만 나누면 됨"],
  ["리스크 인식", "높음", "낮음"],
];

const resultCards = [
  {
    label: "예상 ROAS 변화",
    value: "180% → 240%",
    copy: "운영 전 미리 비교하고 승인하는 흐름이기 때문에 숫자가 훨씬 납득되기 쉽습니다.",
  },
  {
    label: "예상 월매출 변화",
    value: "1,240만 원 → 1,710만 원",
    copy: "광고비를 더 태우는 것이 아니라, 예산 누수를 줄이고 더 반응 좋은 구간으로 재배분합니다.",
  },
  {
    label: "운영 시간",
    value: "매일 체크 → 승인 중심 운영",
    copy: "하루 종일 ROAS를 들여다보는 대신, AI가 만든 변경안을 이해하고 승인하는 흐름으로 바뀝니다.",
  },
];

const faqs = [
  {
    q: "정말 AI가 자동으로 다 바꾸나요?",
    a: "아닙니다. SellFlow AI는 먼저 상품, 상세페이지, 광고 세팅과 예산 배분을 제안하고 Shadow Mode로 예측 결과를 보여준 뒤 사용자가 승인했을 때만 실제 운영에 반영합니다.",
  },
  {
    q: "광고비를 더 쓰게 되는 건 아닌가요?",
    a: "Shadow Mode는 단순히 더 쓰는 방향이 아니라 어디에 써야 낭비가 줄고 성과가 좋아지는지를 먼저 보여주는 방식입니다. 예산 확대보다 예산 재배분의 논리가 우선 제시됩니다.",
  },
  {
    q: "쿠팡 초보 셀러도 쓸 수 있나요?",
    a: "오히려 초보일수록 적합합니다. 무엇을 바꿔야 할지 감으로 판단하는 대신, 비교 결과와 추천 이유를 함께 받아볼 수 있기 때문입니다.",
  },
  {
    q: "성과 수수료는 언제 발생하나요?",
    a: "낮은 기본 구독료로 시작하며 실제 매출 증가가 확인되는 경우에만 증가분의 10%가 성과 수수료로 발생하는 구조를 제안합니다.",
  },
  {
    q: "승인하면 바로 쿠팡에 적용되나요?",
    a: "랜딩페이지에서는 사용자가 승인 버튼을 누르면 준비된 설정이 실제 운영에 반영된다는 흐름으로 이해시키는 것이 가장 명확합니다. 세부 온보딩 로직은 제품 내부에서 추가 안내하면 됩니다.",
  },
];

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl space-y-3 sm:space-y-5">
      <span className="section-kicker inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:px-4 sm:py-2">
        {kicker}
      </span>
      <div className="space-y-3 sm:space-y-4">
        <h2 className="display-title text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base md:text-lg md:leading-8">{copy}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 opacity-35">
        <div className="grid-noise h-full w-full" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(5,10,20,0.72)] backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-3 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#90ff66]/20 bg-[#8dff5f]/10 text-[#b8ff5d] shadow-[0_0_24px_rgba(141,255,95,0.16)] sm:h-11 sm:w-11">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="hidden sm:block">
              <p className="display-title text-base font-semibold tracking-tight text-white sm:text-lg">SellFlow AI</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">Shadow Mode Commerce Ops</p>
            </div>
            <div className="sm:hidden">
              <p className="display-title text-sm font-semibold tracking-tight text-white">SellFlow</p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-xs text-white/58 md:gap-6 lg:flex lg:text-sm">
            <a href="#pain" className="hover:text-white/80 transition-colors">문제</a>
            <a href="#shadow" className="hover:text-white/80 transition-colors">Shadow Mode</a>
            <a href="#flow" className="hover:text-white/80 transition-colors">작동 방식</a>
            <a href="#pricing" className="hover:text-white/80 transition-colors">성과 수수료</a>
            <a href="#faq" className="hover:text-white/80 transition-colors">FAQ</a>
          </nav>

          <Button className="hidden rounded-full bg-[#8dff5f] px-4 text-xs font-semibold text-slate-950 hover:bg-[#b8ff5d] sm:px-6 sm:text-sm md:inline-flex">
            데모 보기
          </Button>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-white/8 bg-[rgba(5,10,20,0.95)] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-3">
              <a href="#pain" className="text-sm text-white/70 hover:text-white">문제</a>
              <a href="#shadow" className="text-sm text-white/70 hover:text-white">Shadow Mode</a>
              <a href="#flow" className="text-sm text-white/70 hover:text-white">작동 방식</a>
              <a href="#pricing" className="text-sm text-white/70 hover:text-white">성과 수수료</a>
              <a href="#faq" className="text-sm text-white/70 hover:text-white">FAQ</a>
              <Button className="mt-2 w-full rounded-full bg-[#8dff5f] text-xs font-semibold text-slate-950 hover:bg-[#b8ff5d]">
                데모 보기
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-24 lg:pt-30">
          <div className="absolute inset-x-0 top-0 -z-10 h-[24rem] sm:h-[32rem] bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.26),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(184,255,93,0.18),transparent_22%)]" />
          <div className="container grid items-center gap-6 sm:gap-8 md:gap-12 lg:gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6 sm:space-y-8 md:space-y-9">
              <div className="space-y-3 sm:space-y-5">
                <span className="section-kicker inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
                  Shadow Mode 시뮬레이션
                </span>
                <div className="space-y-3 sm:space-y-5">
                  <h1 className="display-title max-w-5xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {heroHeadlines[0]}
                  </h1>
                  <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base md:text-lg md:leading-8">
                    SellFlow AI는 상품 발굴부터 상세페이지, 광고 세팅과 예산 배분까지 거의 자동으로 준비합니다. 하지만 바로 실행하지 않습니다. <span className="font-semibold text-white">기존 ROAS와 AI 예측 ROAS를 먼저 비교해 보여주고, 당신이 승인할 때만 반영합니다.</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Button className="h-11 rounded-full bg-[#8dff5f] px-5 text-xs font-semibold text-slate-950 shadow-[0_18px_48px_rgba(141,255,95,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-[#b8ff5d] sm:h-12 sm:px-6 sm:text-sm md:h-14 md:px-8 md:text-base">
                  내 상품 미리 보기
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-white/14 bg-white/6 px-5 text-xs font-semibold text-white hover:bg-white/10 sm:h-12 sm:px-6 sm:text-sm md:h-14 md:px-8 md:text-base">
                  데모 보기
                </Button>
              </div>

              <div className="grid gap-2 sm:gap-3 sm:grid-cols-3">
                {[
                  ["시뮬레이션 선행", "실제 광고 반영 전 예측 비교 제공"],
                  ["성과 기반 과금", "기본 구독 + 증가분 10%"],
                  ["초보 셀러 최적화", "매일 예산 조정 대신 승인 중심 운영"],
                ].map(([title, copy]) => (
                  <div key={title} className="glass-card rounded-[1.5rem] p-3 sm:p-4">
                    <p className="text-xs font-semibold text-white sm:text-sm">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/58 sm:mt-2 sm:text-sm sm:leading-6">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-white/52 sm:gap-4 sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4 text-[#8dff5f]" />승인 전 실제 적용 없음
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4 text-[#8dff5f]" />예상 ROAS / 매출 비교 제공
                </span>
              </div>
            </div>

            <div className="relative mt-6 sm:mt-0">
              <div className="glass-card relative overflow-hidden rounded-[1.5rem] p-2 sm:rounded-[1.75rem] sm:p-3 md:p-4 lg:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(184,255,93,0.1),transparent_24%)]" />
                <img
                  src={heroImage}
                  alt="SellFlow AI Shadow Mode dashboard preview"
                  className="relative z-10 aspect-[16/10] w-full rounded-[1rem] object-cover sm:rounded-[1.3rem] md:rounded-[1.6rem]"
                />
              </div>

              <div className="metric-glow absolute left-2 top-6 rounded-[1.2rem] border border-white/12 bg-[rgba(8,18,32,0.86)] p-2.5 backdrop-blur-lg sm:left-4 sm:top-8 sm:rounded-[1.5rem] sm:p-4 md:left-8 md:top-12">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Current</p>
                <p className="mt-1 font-mono text-xl font-semibold text-white sm:mt-2 sm:text-3xl">ROAS 180%</p>
                <p className="mt-0.5 text-xs text-white/52 sm:mt-1 sm:text-sm">광고비는 쓰이는데 방향이 불안함</p>
              </div>

              <div className="metric-glow absolute bottom-12 right-2 rounded-[1.2rem] border border-[#8dff5f]/18 bg-[rgba(15,32,24,0.72)] p-2.5 backdrop-blur-lg sm:bottom-16 sm:right-4 sm:rounded-[1.5rem] sm:p-4 md:bottom-20 md:right-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#bfffa0]">AI Prediction</p>
                <p className="mt-1 font-mono text-xl font-semibold text-[#d5ff79] sm:mt-2 sm:text-3xl">ROAS 240%</p>
                <p className="mt-0.5 text-xs text-white/60 sm:mt-1 sm:text-sm">예상 매출 1.8M KRW · Confidence 92%</p>
              </div>

              <div className="approval-gradient absolute bottom-2 right-6 rounded-full border border-[#f0c053]/28 px-3 py-2 shadow-[0_0_24px_rgba(240,192,83,0.16)] backdrop-blur-xl sm:bottom-3 sm:right-10 sm:px-5 sm:py-3 md:bottom-6">
                <p className="text-xs font-semibold text-[#ffe4a2] sm:text-sm">승인 전 실제 적용 없음</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pain" className="container py-12 sm:py-16 md:py-22 lg:py-28">
          <SectionTitle
            kicker="Pain Points"
            title="퇴근하고 쿠팡 열 때마다, 오늘도 광고비만 빠졌을까 봐 무섭다면"
            copy="지금 많은 초보 셀러는 상품을 고르는 데서 한 번, 상세페이지 만드는 데서 한 번, 광고 세팅과 예산 조정에서 또 한 번 시간을 잃습니다. 문제는 그렇게 고생해도 결과가 보장되지 않는다는 점입니다."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 md:mt-12 md:gap-5 lg:grid-cols-3">
            {painCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="glass-card relative min-h-[16rem] overflow-hidden rounded-[1.5rem] p-4 sm:min-h-[18rem] sm:rounded-[1.75rem] sm:p-6">
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_55%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="space-y-3 sm:space-y-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[#d5ff79] sm:h-12 sm:w-12">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="display-title text-lg font-semibold text-white sm:text-2xl">{card.title}</h3>
                        <p className="text-xs leading-6 text-white/62 sm:text-sm sm:leading-7">{card.copy}</p>
                      </div>
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.36em] text-white/24">Budget Leak Detected</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="shadow" className="relative py-12 sm:py-16 md:py-24 lg:py-30">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_30%,rgba(45,212,191,0.14),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(184,255,93,0.09),transparent_20%)]" />
          <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 sm:px-6 md:gap-8 lg:gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-28">
              <SectionTitle
                kicker="Shadow Mode"
                title="돈 쓰기 전에, 결과부터 보여주는 AI."
                copy="실제 쿠팡 광고에 적용하기 전에 가상 환경에서 수천 번 예산 배분과 상품 우선순위를 시뮬레이션합니다. 그래서 당신은 기존 성과와 AI 예측 성과를 숫자로 비교한 뒤 승인할 수 있습니다."
              />

              <div className="glass-card rounded-[1.5rem] p-4 sm:rounded-[1.75rem] sm:p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/38 sm:text-sm">Recommendation Reason</p>
                <p className="mt-3 text-sm leading-7 text-white/76 sm:mt-4 sm:text-base md:text-lg md:leading-8">
                  현재 예산의 28%가 전환 가능성이 낮은 상품에 묶여 있습니다. SellFlow AI는 클릭은 많지만 구매 전환이 낮은 상품 2개에서 예산을 회수하고, 장바구니 전환율이 높은 상품 2개에 재배분하는 것이 <span className="font-semibold text-white">ROAS 상승과 매출 증가에 더 유리하다</span>고 예측했습니다.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Button className="h-11 rounded-full bg-[#8dff5f] px-4 text-xs font-semibold text-slate-950 hover:bg-[#b8ff5d] sm:px-6 sm:text-sm md:h-12 md:px-7 md:text-base">
                  예측 결과 확인하고 승인하기
                </Button>
                <p className="flex items-center text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
                  승인 전에는 실제 쿠팡 광고에 아무 변화도 적용되지 않습니다.
                </p>
              </div>
            </div>

            <div className="glass-card overflow-hidden rounded-[1.5rem] p-3 sm:rounded-[1.75rem] sm:p-4 md:p-5 lg:p-6">
              <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-3 sm:rounded-[1.6rem] sm:p-4 md:p-5">
                  <div className="flex flex-col gap-3 border-b border-white/8 pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/36 sm:text-xs">Before vs After</p>
                      <h3 className="display-title mt-2 text-lg font-semibold text-white sm:mt-3 sm:text-xl md:text-2xl">기존 운영 대비 Shadow Mode 예측</h3>
                    </div>
                    <div className="rounded-full border border-[#8dff5f]/20 bg-[#8dff5f]/8 px-3 py-1.5 text-xs font-medium text-[#ccffad] sm:px-4 sm:py-2 sm:text-sm">
                      Confidence 92%
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:mt-5 md:grid-cols-2 md:gap-4">
                    <div className="rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.02)] p-4 sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/38">Current</p>
                      <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                        <div className="flex items-end justify-between gap-3">
                          <span className="text-xs text-white/46 sm:text-sm">ROAS</span>
                          <span className="font-mono text-2xl font-semibold text-white sm:text-3xl md:text-4xl">180%</span>
                        </div>
                        <div className="flex items-end justify-between gap-3">
                          <span className="text-xs text-white/46 sm:text-sm">예상 월매출</span>
                          <span className="font-mono text-lg font-semibold text-white sm:text-xl md:text-2xl">1,240만</span>
                        </div>
                        <div className="rounded-2xl bg-white/4 p-3 text-xs leading-5 text-white/58 sm:p-4 sm:text-sm sm:leading-6">
                          반응 낮은 상품에도 예산이 흩어져 있어 ROAS 변동성이 큽니다.
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.2rem] border border-[#8dff5f]/16 bg-[rgba(141,255,95,0.06)] p-4 shadow-[0_0_50px_rgba(141,255,95,0.08)] sm:rounded-[1.5rem] sm:p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#d8ff97]/72">AI Prediction</p>
                      <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                        <div className="flex items-end justify-between gap-3">
                          <span className="text-xs text-white/56 sm:text-sm">ROAS</span>
                          <span className="font-mono text-2xl font-semibold text-[#d5ff79] sm:text-3xl md:text-4xl">240%</span>
                        </div>
                        <div className="flex items-end justify-between gap-3">
                          <span className="text-xs text-white/56 sm:text-sm">예상 월매출</span>
                          <span className="font-mono text-lg font-semibold text-white sm:text-xl md:text-2xl">1,710만</span>
                        </div>
                        <div className="rounded-2xl bg-[rgba(7,16,33,0.52)] p-3 text-xs leading-5 text-white/70 sm:p-4 sm:text-sm sm:leading-6">
                          상위 반응 상품 중심으로 예산을 재배분해 매출 상승 가능성을 높입니다.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#071021] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-5 sm:rounded-[1.8rem] sm:p-3">
                    <img
                      src={shadowImage}
                      alt="Shadow Mode before and after comparison"
                      className="aspect-[16/10] w-full rounded-[1rem] object-cover sm:rounded-[1.3rem]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="rounded-[1.2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 sm:rounded-[1.5rem] sm:p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/36">Simulation Log</p>
                    <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
                      {logs.map((item, index) => (
                        <div key={item} className="flex items-start gap-2 rounded-2xl border border-white/8 bg-white/4 px-3 py-2 sm:gap-3 sm:px-4 sm:py-3">
                          <span className="font-mono text-xs text-[#8dff5f]">00:{String(index * 3).padStart(2, "0")}</span>
                          <p className="text-xs leading-5 text-white/68 sm:text-sm sm:leading-6">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.2rem] border border-[#f0c053]/16 bg-[rgba(240,192,83,0.06)] p-4 sm:rounded-[1.5rem] sm:p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#ffd783]/74">Approval State</p>
                    <h4 className="mt-3 display-title text-lg font-semibold text-white sm:text-xl md:text-2xl">승인하면, 그때 적용됩니다.</h4>
                    <p className="mt-3 text-xs leading-6 text-white/64 sm:mt-4 sm:text-sm sm:leading-7">
                      AI가 먼저 돌려보고 결과와 근거를 보여줍니다. 당신은 이해한 뒤 승인하면 됩니다. 이 흐름 하나가 초보 셀러의 불안을 크게 낮춥니다.
                    </p>
                    <Button className="mt-4 h-11 w-full rounded-full bg-[#f0c053] px-4 text-xs font-semibold text-slate-950 hover:bg-[#ffd783] sm:h-12 sm:px-6 sm:text-sm md:h-13 md:px-6 md:text-base">
                      승인 대기 변경안 보기
                      <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="flow" className="container py-12 sm:py-16 md:py-22 lg:py-28">
          <SectionTitle
            kicker="How It Works"
            title="상품 찾고, 만들고, 돌려보고, 승인하면 끝."
            copy="복잡한 일을 복잡하게 보이게 하는 것은 쉬운 일입니다. SellFlow AI는 반대로 상품 발굴부터 광고 실행까지의 흐름을 네 단계로 단순하게 정리해 초보 셀러도 이해 가능한 운영 루프로 바꿉니다."
          />

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-2 sm:mt-10 sm:rounded-[2rem] sm:p-4 md:mt-12 md:p-5 lg:p-6">
            <img src={workflowImage} alt="SellFlow AI workflow illustration" className="aspect-[16/8] w-full rounded-[1rem] object-cover sm:rounded-[1.4rem]" />
          </div>

          <div className="relative mt-8 grid gap-3 sm:mt-10 md:mt-12 md:gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="glass-card relative rounded-[1.5rem] p-4 sm:rounded-[1.75rem] sm:p-6">
                  <div className="absolute left-4 top-4 text-3xl font-semibold tracking-[-0.06em] text-white/6 sm:left-6 sm:top-6 sm:text-4xl">{index + 1}</div>
                  <div className="relative z-10 space-y-3 sm:space-y-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-[#d5ff79] sm:h-12 sm:w-12">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="display-title text-lg font-semibold text-white sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-white/62 sm:mt-4 sm:text-sm sm:leading-7">{step.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="relative py-12 sm:py-16 md:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 sm:px-6 md:gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:px-8">
            <div className="space-y-4 sm:space-y-6">
              <SectionTitle
                kicker="Pricing Logic"
                title="못 벌면 많이 안 냅니다. 벌어야 같이 가져갑니다."
                copy="SellFlow AI는 낮은 기본 구독료로 시작하고 실제 매출이 올라간 경우에만 증가분의 10%를 성과 수수료로 받는 구조를 제안합니다. 초보 셀러가 가장 싫어하는 것은 또 하나의 고정비가 아니라 결과 없이 새는 비용입니다."
              />
            </div>

            <div className="glass-card overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
              <div className="grid gap-px bg-white/8 md:grid-cols-3">
                <div className="bg-[rgba(110,33,33,0.32)] p-3 sm:p-4 md:p-5 text-xs uppercase tracking-[0.3em] text-white/42">비교 항목</div>
                <div className="bg-[rgba(110,33,33,0.32)] p-3 sm:p-4 md:p-5 text-xs uppercase tracking-[0.3em] text-white/72">일반 대행 / 툴</div>
                <div className="bg-lime/12 p-3 sm:p-4 md:p-5 text-xs uppercase tracking-[0.3em] text-lime">SellFlow AI</div>
              </div>
              <div className="divide-y divide-white/8">
                {pricingPoints.map(([label, left, right]) => (
                  <div key={label} className="grid gap-px bg-white/8 md:grid-cols-3">
                    <div className="bg-white/3 p-3 sm:p-4 md:p-5 text-xs font-medium text-white sm:text-sm">{label}</div>
                    <div className="bg-white/2 p-3 sm:p-4 md:p-5 text-xs text-white/62 sm:text-sm">{left}</div>
                    <div className="bg-lime/5 p-3 sm:p-4 md:p-5 text-xs text-white/78 sm:text-sm">{right}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container py-12 sm:py-16 md:py-22 lg:py-28">
          <SectionTitle
            kicker="Expected Outcomes"
            title="초보 셀러가 가장 먼저 체감하는 변화는, 덜 건드려도 되는 운영입니다."
            copy="감정적인 약속보다 사용자가 머릿속으로 바로 상상할 수 있는 숫자와 변화 형태를 보여주는 데 초점을 둡니다."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 md:mt-12 md:gap-5 lg:grid-cols-3">
            {resultCards.map((card) => (
              <article key={card.label} className="glass-card rounded-[1.5rem] p-4 sm:rounded-[1.75rem] sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/36 sm:text-sm">{card.label}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-gradient sm:mt-5 sm:text-3xl">{card.value}</p>
                <p className="mt-3 text-xs leading-6 text-white/62 sm:mt-4 sm:text-sm sm:leading-7">{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="container py-12 sm:py-16 md:py-24 lg:py-28">
          <SectionTitle
            kicker="FAQ"
            title="마지막으로 남는 질문까지, 전환을 방해하지 않게 정리합니다."
            copy="자동 적용에 대한 불안, 초보도 쓸 수 있는지, 쿠팡에 언제 반영되는지, 그리고 비용 구조에 대한 질문은 반드시 마지막에 해소해줘야 합니다."
          />

          <div className="mt-8 glass-card rounded-[1.5rem] p-3 sm:mt-10 sm:rounded-[1.75rem] sm:p-6 md:mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`item-${index}`} className="border-white/8 px-1 sm:px-2">
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-white hover:no-underline sm:py-6 sm:text-base md:text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pr-2 text-xs leading-7 text-white/62 sm:pb-6 sm:pr-4 sm:text-sm md:text-base md:leading-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="cta" className="relative pb-12 pt-4 sm:pb-16 md:pb-24 lg:pb-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-card relative overflow-hidden rounded-[1.5rem] px-4 py-8 sm:rounded-[1.75rem] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(141,255,95,0.14),transparent_55%)]" />
              <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4 sm:space-y-6">
                  <span className="section-kicker inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Final CTA</span>
                  <h2 className="display-title text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    이제 광고비를 감으로 쓰지 말고, 먼저 보고 승인하세요.
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/68 sm:text-base md:text-lg md:leading-8">
                    상품 발굴부터 상세페이지, 광고 세팅과 예산 배분까지. SellFlow AI는 초보 셀러가 가장 무서워하는 순간, 즉 실제 돈이 나가기 직전에 가장 강해집니다. Shadow Mode로 먼저 비교하고, 납득되면 승인하세요.
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-[rgba(8,18,32,0.8)] p-4 backdrop-blur-xl sm:rounded-[1.8rem] sm:p-6">
                  <div className="space-y-3 border-b border-white/8 pb-4 sm:space-y-4 sm:pb-6">
                    <div className="flex items-center gap-2 text-xs text-white/76 sm:gap-3 sm:text-sm">
                      <BadgeCheck className="h-4 w-4 text-[#8dff5f] sm:h-5 sm:w-5" />
                      <span>승인 전 실제 적용 없음</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/76 sm:gap-3 sm:text-sm">
                      <BadgeCheck className="h-4 w-4 text-[#8dff5f] sm:h-5 sm:w-5" />
                      <span>예상 ROAS와 매출 비교 제공</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/76 sm:gap-3 sm:text-sm">
                      <BadgeCheck className="h-4 w-4 text-[#8dff5f] sm:h-5 sm:w-5" />
                      <span>기본 구독 + 증가분 10% 구조</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:gap-3">
                    <Button className="h-11 rounded-full bg-[#8dff5f] px-4 text-xs font-semibold text-slate-950 hover:bg-[#b8ff5d] sm:h-12 sm:px-6 sm:text-sm md:h-13 md:px-6 md:text-base">
                      Shadow Mode 데모 보기
                    </Button>
                    <Button
                      variant="outline"
                      className="h-11 rounded-full border-white/12 bg-white/6 px-4 text-xs font-semibold text-white hover:bg-white/10 sm:h-12 sm:px-6 sm:text-sm md:h-13 md:px-6 md:text-base">
                      내 상품으로 시뮬레이션 시작하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
