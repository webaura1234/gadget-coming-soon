import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EntryPage from './pages/EntryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
