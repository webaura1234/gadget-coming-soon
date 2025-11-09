import '../LandingPage.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-text">
            © {new Date().getFullYear()} GADGET 360. All rights reserved.
          </p>
          {/* <p className="footer-text">
            Premium phone cases and accessories for mobile enthusiasts across India.
          </p> */}
        </div>
        <div className="footer-credit">
          <p className="footer-text">
          A creation by <a href="https://www.instagram.com/_webaura?igsh=dmM4MzFodXN5ZjJs" target="_blank" rel="noopener noreferrer" className="footer-link">WebAura</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

