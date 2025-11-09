import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../LandingPage.css'
import { supabase } from '../supabaseClient'

function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitMessage('')
    setMessageType('')

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        created_at: new Date().toISOString()
      }

      const { error } = await supabase
        .from('contacts')
        .insert([payload])

      if (error) {
        throw error
      }

      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setMessageType('success')
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
        setMessageType('')
      }, 5000)
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setSubmitMessage('Sorry, something went wrong. Please try again.')
      setMessageType('error')

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
        setMessageType('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page-container">
      <Navbar />

      <div className="page-content">
        <div className={`contact-section-full ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="page-headline">
            <span className="page-headline-gradient">Contact Us</span>
          </h1>

          <p className="section-text" style={{ marginBottom: '3rem' }}>
          Whether it’s a question, suggestion, or feedback — our team would love to hear.
          </p>

          <div className="contact-grid">
            <div className="contact-info-section">
              <div className="contact-item-detailed">
                <h3 className="contact-label">Email</h3>
                <a href="hpsventerprisespvtltd@gmail.com" className="contact-link-large">
                  hpsventerprisespvtltd@gmail.com
                </a>
              </div>

              <div className="contact-item-detailed">
                <h3 className="contact-label">Follow Us</h3>
                <div className="social-links"> <a href="https://www.instagram.com/gadget360india?igsh=MWVyMGpzdmVzazY1Yw==" target="_blank" className="social-link">
                  Instagram
                </a>

                  <a 
                    href="https://wa.me/919848014599" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Whatsapp
                  </a>
                  
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea"
                rows="6"
                required
                disabled={isSubmitting}
              ></textarea>
              <button type="submit" className="contact-submit-button" disabled={isSubmitting}>
                <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              </button>

              {submitMessage && (
                <p className={`submit-message ${messageType}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

