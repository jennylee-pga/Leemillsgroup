import { useState } from 'react'
import './App.css'

// Drop your images into src/assets/carousel/ and import them here.
// Example:
//   import photo1 from './assets/carousel/photo1.jpg'
//   import photo2 from './assets/carousel/photo2.jpg'
//
// Then add them to the slides array below:
//   { id: 1, url: photo1, alt: 'Description' },

const slides = [
  // Add your slides here once you've uploaded images to src/assets/carousel/
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
