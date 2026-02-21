import { useState } from 'react'
import './App.css'

import photo1 from './assets/carousel/9EE90625-767C-472D-9D80-AB1E62F38CAC_1_105_c.jpeg'
import photo2 from './assets/carousel/A49D0905-EC72-4CE9-8F47-9BF7E0A2AF68_4_5005_c.jpeg'
import photo3 from './assets/carousel/B25E8B72-C35E-4D8E-9267-BC40D6723B48_4_5005_c.jpeg'
import photo4 from './assets/carousel/CA03390A-AD6A-4ADA-9F44-D9F878CE87BC_4_5005_c.jpeg'

const slides = [
  { id: 1, url: photo1, alt: 'Photo 1' },
  { id: 2, url: photo2, alt: 'Photo 2' },
  { id: 3, url: photo3, alt: 'Photo 3' },
  { id: 4, url: photo4, alt: 'Photo 4' },
]

function Carousel() {
  const [current, setCurrent] = useState(0)

  if (slides.length === 0) {
    return (
      <div className="carousel carousel--empty">
        <p>Upload images to <code>src/assets/carousel/</code> to get started.</p>
      </div>
    )
  }

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
          <h1 className="hero-title">Allen and Jenny</h1>
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
