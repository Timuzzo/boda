import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Timeline from "./pages/Timeline";
import Travel from "./pages/Travel";
import Accommodation from "./pages/Accommodation";
import RSVP from "./pages/RSVP";
import Gifts from "./pages/Gifts";
import Gallery from "./pages/Gallery";
import QA from "./pages/QA";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
