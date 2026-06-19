import "/App.css";

const categories = [
  "아파트",
  "빌라 · 투룸+",
  "원룸",
  "오피스텔",
  "상가 · 사무실",
  "단기임대",
];

const news = [
  {
    title: "전국 아파트 매매 거래량 증가",
    date: "2025.06.18",
  },
  {
    title: "강남권 오피스텔 수요 증가",
    date: "2025.06.15",
  },
  {
    title: "신축 빌라 전세 시장 동향",
    date: "2025.06.12",
  },
];

export default function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">🏠 HomeEstate</div>

        <div className="header-buttons">
          <button>로그인</button>
          <button>중개사무소 가입</button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="overlay">
          <h1>부동산은 HomeEstate로</h1>
          <p>
            원룸부터 아파트, 오피스텔, 상가까지
            <br />
            원하는 매물을 쉽고 빠르게 찾아보세요.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        {categories.map((item) => (
          <div key={item} className="category-card">
            <div className="icon">🏢</div>
            <span>{item}</span>
          </div>
        ))}
      </section>

      {/* Promotion */}
      <section className="promo">
        <div className="promo-video">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="property"
          />
        </div>

        <div className="promo-banner">
          <h2>
            중개사무소
            <br />
            가입도
            <br />
            HomeEstate로
          </h2>
        </div>
      </section>

      {/* News */}
      <section className="news">
        <h2>발빠르게 전달하는 최신 부동산 동향</h2>
        <p>부동산 소식을 요약해서 알려드립니다.</p>

        <div className="news-grid">
          {news.map((item) => (
            <div className="news-card" key={item.title}>
              <h4>{item.title}</h4>
              <span>{item.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section className="notice">
        <h3>공지사항</h3>

        <ul>
          <li>[공지] 개인정보 처리방침 개정 안내</li>
          <li>[공지] 서비스 이용약관 변경 안내</li>
          <li>[공지] 시스템 점검 안내</li>
        </ul>
      </section>
    </div>
  );
}