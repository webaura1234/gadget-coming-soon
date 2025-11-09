import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../LandingPage.css'
import { supabase } from '../supabaseClient'

function EntryPage() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ 
          email: email.trim(),
          created_at: new Date().toISOString()
        }])

      if (error) throw error

      setSubmitMessage('Thank you for joining! Check your email for exclusive access.')
      setEmail('')
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="landing-page">
      <Navbar />

      {/* Full Screen Store Hero Section */}
      <section className="store-hero-section">
        <div className="store-hero-image-wrapper">
          <img
            src="https://res.cloudinary.com/dulebiodx/image/upload/v1762581583/DSC_0560_hrz9dp.jpg"
            alt="GADGET 360 Store"
            className="store-hero-image"
          />
          <div className="store-hero-overlay"></div>
        </div>
        <div className="store-hero-content">
          <div className="store-hero-text-wrapper">
            <h1 className={`store-hero-heading ${isVisible ? 'animate-fade-in-up' : ''}`}>
              Coming Soon
            </h1>
            <p className={`store-hero-text ${isVisible ? 'animate-fade-in-up-delay-1' : ''}`}>
              We’re thrilled to announce that GADGET 360 is officially launching nationwide!
              Now, our expertly curated collection of premium phone cases and accessories will be available at every doorstep across India.
              But we’re not just launching a store — we’re building a community for mobile enthusiasts.
            </p>
          </div>
        </div>
      </section>

      <div className="content-container" style={{ marginTop: 0 }}>

        {/* Email Capture Section */}
        <div className={`email-section ${isVisible ? 'animate-fade-in-up-delay-3' : ''}`}>
          <h2 className="cta-headline">BE THE FIRST</h2>
          <p className="cta-text">
          Get early access to our nationwide launch and enjoy 15% off your first order.
          </p>

          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="notify-button"
              disabled={isSubmitting}
            >
              <span>{isSubmitting ? 'SUBMITTING...' : 'NOTIFY ME'}</span>
            </button>
            {submitMessage && (
              <p className="submit-message">{submitMessage}</p>
            )}
          </form>
        </div>

        {/* Offline Store Section */}
        <div className={`offline-store-section ${isVisible ? 'animate-fade-in-up-delay-4' : ''}`}>
          <h2 className="cta-headline">Visit Our Offline Store</h2>
          <p className="cta-text">
          Discover our exclusive collection up close. Experience the quality, style, and craftsmanship in person.
          </p>

          <div className="stores-grid">
            <div
              className="store-card"
              onClick={() => window.open('https://maps.app.goo.gl/dzUXF7fs8wHLRb6v7', '_blank')}
            >
              <h3 className="store-name">GADGET 360 Kukatpally Store</h3>
              <p className="store-city">Hyderbad, Kukatpally</p>
              <p className="store-hours">Mon-Sat: 10AM - 8PM </p>
              <span className="store-link">View on Maps →</span>
            </div>

            <div
              className="store-card"
              onClick={() => window.open('https://maps.app.goo.gl/xZM5q3ppURQNJ1n99', '_blank')}
            >
              <h3 className="store-name">GADGET 360 Bandlaguda Jagir Store</h3>
              <p className="store-city">Hyderbad, Bandlaguda Jagir</p>
              <p className="store-hours">Mon-Sat: 10AM - 8PM </p>
              <span className="store-link">View on Maps →</span>
            </div>

            <div
              className="store-card"
              onClick={() => window.open('https://maps.app.goo.gl/LEBSo4VGExHkDyXz6', '_blank')}
            >
              <h3 className="store-name">GADGET 360 Toli Chowki Store</h3>
              <p className="store-city">Hyderbad, Toli Chowki</p>
              <p className="store-hours">Mon-Sat: 10AM - 8PM </p>
              <span className="store-link">View on Maps →</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EntryPage

