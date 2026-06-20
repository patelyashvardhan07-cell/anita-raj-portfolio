import { useState } from 'react'
import { paintings } from '../data/paintings'
import Lightbox from './Lightbox'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const selectedIndex = selected
    ? paintings.findIndex((p) => p.id === selected.id)
    : -1

  const goTo = (direction) => {
    if (selectedIndex < 0) return
    const next =
      (selectedIndex + direction + paintings.length) % paintings.length
    setSelected(paintings[next])
  }

  return (
    <section id="gallery" className="gallery section">
      <div className="section-header">
        <p className="section-eyebrow">Selected Works</p>
        <h2>Gallery</h2>
        <p className="section-description">
          Oil paintings celebrating the forts, palaces, and havelis of
          Rajasthan — from grand facades to intimate jharokha portraits.
        </p>
      </div>

      <p className="gallery-count">
        {paintings.length} {paintings.length === 1 ? 'painting' : 'paintings'}
      </p>

      <div className="gallery-grid">
        {paintings.map((painting) => (
          <button
            key={painting.id}
            type="button"
            className={`gallery-card ${painting.large ? 'gallery-card--large' : ''}`}
            onClick={() => setSelected(painting)}
          >
            <div className="gallery-card-frame">
              <div className="gallery-card-image">
                <img
                  src={painting.image}
                  alt={painting.title}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="gallery-card-info">
              <h3>{painting.title}</h3>
              <p>
                {painting.series && (
                  <span className="gallery-series">{painting.series} · </span>
                )}
                {painting.medium} · {painting.year}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <Lightbox
          painting={selected}
          index={selectedIndex}
          total={paintings.length}
          onClose={() => setSelected(null)}
          onPrev={() => goTo(-1)}
          onNext={() => goTo(1)}
        />
      )}
    </section>
  )
}
