import { featuredPainting } from '../data/paintings'
import Ornament from './Ornament'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-eyebrow">Anita Raj · Oil Paintings</p>
        <h1>
          ANITA RAJ
           <p>Artist</p>
        </h1>
        <Ornament />
        <p className="hero-description">
          <em>My tribute to heritage where Queens reign, Pigeons perch, and history whispers through every stroke on canvas.
          </em>
        </p>
        <div className="hero-actions">
          <a href="#gallery" className="btn btn-primary">
            Explore Gallery
          </a>
        </div>
      </div>

      <div className="hero-artwork">
        <div className="hero-frame">
          <div className="hero-frame-inner">
            <img
              src={featuredPainting.image}
              alt={featuredPainting.title}
              className="hero-image"
            />
          </div>
        </div>
        <figcaption className="hero-caption">
          
        </figcaption>
      </div>
    </section>
  )
}
