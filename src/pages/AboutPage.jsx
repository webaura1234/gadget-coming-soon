import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../LandingPage.css'

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="page-container">
      <Navbar />

      <div className="page-content">
        <div className={`about-section-full ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="page-headline">
            <span className="page-headline-gradient">About GADGET 360</span>
          </h1>

          <div className="about-content">
            <p className={`section-text ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
              Welcome to GADGET 360 a new-age destination built for mobile enthusiasts who care about style, protection, and quality.
              Our upcoming website is more than just an online store — it’s a hub for everything mobile.
              From expert-curated phone cases and accessories to style guides, care tips, and trend updates, we’re creating a space where design meets functionality..
            </p>

            <p className={`section-text ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}>
              Every product is thoughtfully selected to match your lifestyle — blending aesthetics, durability, and innovation in every detail.
              At GADGET 360 , we believe your phone deserves more than protection —
              it deserves personality, elegance, and premium care.
            </p>
          </div>

          {/* Image Gallery Section */}
          <div className={`about-image-gallery ${isVisible ? 'animate-fade-in-up-delay-2' : ''}`}>
            <div className="about-gallery-item">
              <img
                src="https://res.cloudinary.com/dulebiodx/image/upload/v1762581583/DSC_0560_hrz9dp.jpg"
                alt="Premium iPhone Case Design 1"
                className="about-gallery-image"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://res.cloudinary.com/djb258n8t/image/upload/v1762629902/WhatsApp_Image_2025-11-06_at_14.05.59_fd4ded44_ojzfxx.jpg"
                alt="Premium iPhone Case Design 2"
                className="about-gallery-image"
              />
            </div>
            <div className="about-gallery-item">
              <img
                src="https://res.cloudinary.com/djb258n8t/image/upload/v1762629927/WhatsApp_Image_2025-11-06_at_14.05.57_b19ebef1_dh89zq.jpg"
                alt="Premium iPhone Case Design 3"
                className="about-gallery-image"
              />
            </div>
          </div>

          <div className="about-content">
            <p className={`section-text ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}>
              We partner with the world's most innovative designers and manufacturers to bring
              you cases that are not just accessories, but extensions of your personal style
              and taste.
            </p>

            <p className={`section-text ${isVisible ? 'animate-fade-in-up-delay-4' : ''}`}>
              And we’re just getting started — soon, you’ll discover exclusive collections, community features, and personalized recommendations designed to make your experience truly one of a kind. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

