import { useState } from 'react'
import './App.css'

const slides = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    alt: 'Mountain landscape',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
    alt: 'Sunlit forest',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    alt: 'Ocean at sunset',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80',
    alt: 'Rolling green hills',
  },
]

function Carousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <img key={slide.id} src={slide.url} alt={slide.alt} className="carousel-slide" />
        ))}
      </div>

      <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
        &#8592;
      </button>
      <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
        &#8594;
      </button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <header className="header">
        <span className="header-logo">Lee Mills Group</span>
        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero-title">Allen and Jenny, Can You Make That Happen?</h1>
          <p className="hero-sub">Lee Mills Group &mdash; Where vision meets execution.</p>
        </section>

        <section className="carousel-section">
          <Carousel />
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Lee Mills Group. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
