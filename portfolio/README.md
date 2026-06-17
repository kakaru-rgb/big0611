# 빅데이터 개발자 포트폴리오 웹사이트

모던하고 세련된 풀 페이지 포트폴리오 웹사이트입니다. Netlify에 배포하여 사용할 수 있습니다.

## 🚀 기능

- 풀 페이지 스크롤 디자인
- 반응형 레이아웃 (모바일/태블릿/데스크톱)
- 부드러운 애니메이션 효과
- 스킬 그리드 레이아웃
- 포트폴리오 프로젝트 카드
- 연락처 폼 (이메일 전송)

## 📋 기술 스택

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Font Awesome

## 🛠️ 설치 및 실행

1. 이 프로젝트를 클론하거나 다운로드합니다.
2. 로컬에서 실행하려면 브라우저에서 `index.html` 파일을 엽니다.
3. 또는 로컬 서버를 사용합니다:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```

## 🌐 Netlify 배포

### 방법 1: Git 연동 (권장)

1. 이 프로젝트를 GitHub에 푸시합니다.
2. [Netlify](https://www.netlify.com/)에 로그인합니다.
3. "New site from Git"을 클릭합니다.
4. 해당 리포지토리를 선택합니다.
5. Build 설정을 확인하고 "Deploy site"를 클릭합니다.

### 방법 2: 드래그 앤 드롭

1. [Netlify](https://www.netlify.com/)에 로그인합니다.
2. 대시보드에서 "Add new site" > "Deploy manually"를 클릭합니다.
3. `portfolio` 폴더를 드래그 앤 드롭합니다.

## 📧 이메일 폼 설정 (Formspree)

이메일 전송 기능을 활성화하려면 Formspree를 설정해야 합니다:

1. [Formspree](https://formspree.io/)에 접속하여 무료 계정을 만듭니다.
2. 새 폼을 생성하여 Form ID를 받습니다.
3. `index.html` 파일의 다음 부분을 수정합니다:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm">
   ```
   `YOUR_FORM_ID`를 실제 Formspree Form ID로 교체하세요.

4. `js/script.js` 파일에서 다음 주석을 해제합니다:
   ```javascript
   // this.submit();
   ```

## 🎨 사용자 정의

### 연락처 정보 수정

`index.html` 파일에서 연락처 정보를 변경하세요:
- 전화번호: `010-1234-5678`
- 이메일: `developer@email.com`
- 이름: `김개발`

### 포트폴리오 프로젝트 수정

`index.html` 파일의 포트폴리오 섹션에서 프로젝트 정보를 수정하세요.

### 색상 테마 변경

`css/style.css` 파일의 CSS 변수를 수정하여 색상을 변경하세요:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

## 📁 프로젝트 구조

```
portfolio/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── script.js       # JavaScript 기능
├── _redirects          # Netlify 리다이렉트 설정
├── netlify.toml        # Netlify 설정 파일
└── README.md           # 이 파일
```

## 🌟 특징

- **모던 디자인**: 그라디언트와 애니메이션을 활용한 세련된 UI
- **반응형**: 모든 디바이스에서 최적화된 화면
- **부드러운 스크롤**: 자연스러운 네비게이션 경험
- **인터랙티브**: 호버 효과와 스크롤 애니메이션
- **SEO 친화적**: 시멘틱 HTML 태그 사용

## 📝 라이선스

이 프로젝트는 개인 포트폴리오용으로 자유롭게 사용 및 수정할 수 있습니다.

## 🤝 기여

버그 리포트나 기능 요청은 환영합니다!

---

**빅데이터 1000시간 과정 수료 | 풀스택 개발자 포트폴리오**