import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroPage from '../components/HeroPage'
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
      // Sanitize and validate email
      const sanitizedEmail = email.trim().toLowerCase().slice(0, 255)
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(sanitizedEmail)) {
        setSubmitMessage('Please enter a valid email address.')
        setIsSubmitting(false)
        return
      }

      const { error } = await supabase
        .from('subscribers')
        .insert([{ 
          email: sanitizedEmail,
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
     <HeroPage />

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
              <h3 className="store-name">GADGET 360 - Kukatpally </h3>
              <p className="store-city">Sri Sri Dwarakamai, Plot 7, K P H B Phase 9, Kukatpally, Hyderabad, Telangana 500085</p>
              <p className="store-city">Contact : 9848014599</p>
              <span className="store-link">View on Maps →</span>
            </div>

            <div
              className="store-card"
              onClick={() => window.open('https://maps.app.goo.gl/xZM5q3ppURQNJ1n99', '_blank')}
            >
              <h3 className="store-name">GADGET 360 - Bandlaguda Jagir</h3>
              <p className="store-city">3rd floor, Vantage Line Mall, Bandlaguda Jagir, Hyderabad, Telangana 500091</p>
               <p className="store-city">Contact : 9848014599</p>
              <span className="store-link">View on Maps →</span>
            </div>

            <div
              className="store-card"
              onClick={() => window.open('https://maps.app.goo.gl/LEBSo4VGExHkDyXz6', '_blank')}
            >
              <h3 className="store-name">GADGET 360 - Toli Chowki</h3>
              <p className="store-city">SK Arcade, Tolichowki Rd, beside Bajaj electronics, Galaxy, Deluxe Colony, Janaki Nagar Colony, Toli Chowki, Hyderabad, Telangana 500008</p> 
               <p className="store-city">Contact : 9848014599</p>
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

