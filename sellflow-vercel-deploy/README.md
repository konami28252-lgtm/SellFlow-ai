# SellFlow AI - Landing Page

쿠팡 초보 셀러를 위한 AI 자동화 플랫폼 랜딩페이지입니다.

## 🚀 빠른 시작

### 로컬 개발

```bash
# 의존성 설치
npm install
# 또는
pnpm install

# 개발 서버 시작
npm run dev
# 또는
pnpm dev
```

http://localhost:3000 에서 확인하세요.

### 빌드

```bash
npm run build
# 또는
pnpm build
```

`dist` 폴더에 최적화된 프로덕션 빌드가 생성됩니다.

## 🌐 Vercel 배포

### 1단계: GitHub에 푸시

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sellflow-ai.git
git push -u origin main
```

### 2단계: Vercel 연결

1. https://vercel.com/new 방문
2. GitHub 계정 연결
3. `sellflow-ai` 레포지토리 선택
4. "Deploy" 클릭

Vercel이 자동으로 빌드하고 배포합니다.

## 📁 프로젝트 구조

```
sellflow-ai/
├── src/
│   ├── components/     # React 컴포넌트
│   ├── App.tsx         # 메인 앱
│   ├── main.tsx        # 진입점
│   └── index.css       # 전역 스타일
├── index.html          # HTML 템플릿
├── vite.config.ts      # Vite 설정
├── tsconfig.json       # TypeScript 설정
├── package.json        # 의존성
└── README.md           # 이 파일
```

## 🎨 기술 스택

- **React 19** - UI 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 스타일링
- **Vite** - 빌드 도구
- **Lucide React** - 아이콘

## 🔧 커스터마이징

### 색상 변경

`src/index.css`에서 CSS 변수를 수정하세요:

```css
:root {
  --primary: #8dff5f;        /* 주요 색상 */
  --background: #050a14;     /* 배경 */
  --foreground: #e5e7eb;     /* 텍스트 */
}
```

### 텍스트 수정

각 컴포넌트 파일을 직접 수정하세요:
- `src/components/Hero.tsx` - 메인 메시지
- `src/components/FAQ.tsx` - 자주 묻는 질문
- 등등

## 📊 성능

- **번들 크기**: ~80KB (gzip)
- **Lighthouse 점수**: 95+
- **로딩 시간**: < 1초

## 🤝 지원

문제가 발생하면 GitHub Issues를 통해 보고해주세요.

## 📄 라이선스

MIT License
