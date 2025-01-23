import HeaderBar from './components/HeaderBar';
import './App.css';
import ImageSlider from './components/ImageSlider';
import CommentSection from './components/CommentSection';

function App() {

  const goToLink = (link) => {
    window.open(link);
  }

  return (
    <div id="app">
      <div id="banner">
        <HeaderBar/>
      </div>
      <div id="section-image-container">
        <div id="section-1-image"/>
      </div>
      <div id="About">
        <div class="text-container">
          <h1>
            Meet The Coach
          </h1>
          <p>
            Coach Chris has been involved in multi sport and endurance events for over 14 years and has completed more than 100 races including multiple Ironman and 70.3 events!
          </p>
          <p>
            Inspired years ago by a simple bike ride on a sunny afternoon a fire was lit that burns larger and hotter than ever with the opportunity to bring endurance into the lives of others!
          </p>
        </div>
      </div>
      <ImageSlider/>
      <div id="Philosophy" class="text-container">
          <h1>
            Our Philosophy
          </h1>
          <p>
            Through the use of Polarized Training (Heart rate based training), with proper recovery and a fitness/life balance, custom plans are created for each athlete to  attain their goals.
          </p>
      </div>
      <div id="service-section">
          <h1>
            Services
          </h1>
          <div id="services-display">
            <div className="service-option">
              <div class="service-name">
                Level 1
              </div>
              <div class="service-details">
                <ul>
                  <li>Weekly custom plans in 4 week blocks</li>
                  <li>Daily analysis and review of workouts via text/email</li>
                  <li>Video analysis of workouts </li>
                  <li>Nutrition assistance</li>
                  <li>Equipment assistance</li>
                </ul>
              </div>
            </div>
            <div className="service-option">
              <div class="service-name">
                Level 2
              </div>
              <div class="service-details">
                <ul>
                  <li>4 week block of plans</li>
                  <li>Monthly analysis of workouts via text/email</li>
                  <li>Nutrition assistance</li>
                  <li>Equipment assistance</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div id="Testimonials">
        <CommentSection/>
      </div>
      <div id="footer-section">
        <div id="email-section">
          <div className="footer-text-section">
            Email
          </div>
          <div>
            endurancelegion@gmail.com
          </div>
        </div>
        <div id="social-section">
          <div className="footer-text-section">
            Follow
          </div>
          <div id="social-images-section">
            <div className="social-option">
              <img className="social-image" src="./assets/facebook.png" onClick={() => goToLink("https://www.facebook.com/profile.php?id=61569413314440")}/>
            </div>
            <div className="social-option">
              <img className="social-image" src="./assets/instagram.png" onClick={() => goToLink("https://www.instagram.com/endurance.legion/?hl=en")}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
