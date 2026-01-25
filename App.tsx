import React, { useEffect } from 'react';
import BottomBubbleMenu from './components/BottomBubbleMenu';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Store from './pages/Store';
import Payments from './pages/Payments';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';
import Blog from './pages/Blog';

// ScrollToTop stays because it's useful!
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* FloatingMenu WAS HERE - IT IS NOW GONE */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Forms />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/store" element={<Store />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;