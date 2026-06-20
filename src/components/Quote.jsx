import Ornament from './Ornament'

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-inner">
        <Ornament />
        <blockquote>
          <p>
            &ldquo;Every jharokha is a poem in stone — I paint not buildings,
            but the golden silence that lives within their carved walls.&rdquo;
          </p>
          <footer>— Anita Raj</footer>
        </blockquote>
        <Ornament />
      </div>
    </section>
  )
}
