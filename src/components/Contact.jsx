import Ornament from './Ornament'

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-card">
        <p className="section-eyebrow">Get in Touch</p>
        <h2>Commission &amp; Inquiries</h2>
        <Ornament />
        <p>
          Interested in acquiring an original work, commissioning a painting, or
          discussing an exhibition? I would love to hear from you.
        </p>

        <div className="contact-links">
          <a href="mailto:anitarajpatel.82@gmail.com" className="contact-link">
            <span className="contact-label">Email</span>
            <span>anitarajpatel.82@gmail.com</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-label">Instagram</span>
            <span>anita_raj.82</span>
          </a>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target
            const data = new FormData(form)
            const subject = encodeURIComponent('Portfolio inquiry')
            const body = encodeURIComponent(
              `Name: ${data.get('name')}\n\n${data.get('message')}`,
            )
            window.location.href = `mailto:artist@example.com?subject=${subject}&body=${body}`
          }}
        >
          <label>
            Name
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your interest in a painting or commission..."
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
