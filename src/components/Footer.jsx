export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          
          <div>
            <p className="footer-name">Anita Raj</p>
            <p className="footer-tagline">Oil Paintings · Rajasthan</p>
          </div>
        </div>
        <nav className="footer-nav">
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Anita Raj. All rights reserved.
      </p>
    </footer>
  )
}
