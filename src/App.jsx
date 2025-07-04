import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import OurStory from "./pages/OurStory"
import Details from "./pages/Details"
import Travel from "./pages/Travel"
import Registry from "./pages/Registry"
import RSVP from "./pages/RSVP"
import FAQ from "./pages/FAQ"
import ScrollToTop from "./ScrollToTop"
import "./App.css"

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/details" element={<Details />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  )
}

export default App

