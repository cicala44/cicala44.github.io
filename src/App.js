import NavBar from './components/NavBar';
import './App.css';
import TestimonialSection from './sections/TestimonialSection';
import AboutMeSection from './sections/AboutMeSection';
import PhilosophySection from './sections/PhilosophySection';
import CertificateSection from './sections/CertificateSection';
import ServiceSection from './sections/ServiceSection';
import BannerImageSection from './sections/BannerImageSection';
import VideoSection from './sections/VideoSection';
import FooterSection from './sections/FooterSection';
import ImageGallerySection from './sections/ImageGallerySection';

function App() {
  return (
    <div id="app">
      <div id="navigation-section">
        <NavBar />
      </div>
      <div id="Banner-Image">
        <BannerImageSection />
      </div>
      <div id="About">
        <AboutMeSection />
      </div>
      <div id="Philosophy">
        <PhilosophySection />
      </div>
      <div id="Certificates">
        <CertificateSection />
      </div>
      <div id="Services">
        <ServiceSection />
      </div>
      <div id="Video">
        <VideoSection />
      </div>
      <div id="Testimonials">
        <TestimonialSection />
      </div>
      <div id="Image-Gallery">
        <ImageGallerySection />
      </div>
      <div id="Contact">
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
