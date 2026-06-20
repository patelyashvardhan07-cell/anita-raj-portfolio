import { useEffect } from 'react'

export default function Lightbox({
  painting,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, onPrev, onNext])

  if (!painting) return null

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={painting.title}
    >
      <button
        type="button"
        className="lightbox-nav lightbox-nav--prev"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous painting"
      >
        ‹
      </button>

      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="lightbox-frame">
          <img src={painting.image} alt={painting.title} />
        </div>
        <div className="lightbox-details">
          <div className="lightbox-details-top">
            <h3>{painting.title}</h3>
            <span className="lightbox-counter">
              {index + 1} / {total}
            </span>
          </div>
          {painting.series && (
            <p className="lightbox-series">{painting.series}</p>
          )}
          <p>
            {painting.medium} · {painting.size} · {painting.year}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-nav--next"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next painting"
      >
        ›
      </button>
    </div>
  )
}
