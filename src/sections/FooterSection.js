import FooterMediaOption from "../components/FooterMediaOption";
import "./FooterSection.css"

const FooterSection = () => {
    return (
        <div className="footer-section-container">
          <div className="footer-content-container">
            <div className="footer-text">
              For further inquiries and to set up a consulation, please reach out via email
            </div>
            <div className="footer-email-container">
              <a className="footer-email" href="mailto:endurancelegion@gmail.com">endurancelegion@gmail.com</a>
            </div>
            <div className="footer-media">
              <FooterMediaOption image={"./assets/facebook.png"} mediaLink={"https://www.facebook.com/profile.php?id=61569413314440"} altName={"facebook"} />
              <FooterMediaOption image={"./assets/instagram.png"} mediaLink={"https://www.instagram.com/endurance.legion/?hl=en"} altName={"instagram"} />
            </div>
          </div>
        </div>
    );
}
export default FooterSection;

/*
<div id="footer-section">
        <h1>Contact</h1>
        <div id="footer-display">
          <div id="email-section">
            <div className="footer-text-section">
              For further inquiries and to set up a consulation, please reach out via email
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
                <img className="social-image" src="./assets/facebook.png" onClick={() => goToLink("https://www.facebook.com/profile.php?id=61569413314440")} />
              </div>
              <div className="social-option">
                <img className="social-image" src="./assets/instagram.png" onClick={() => goToLink("https://www.instagram.com/endurance.legion/?hl=en")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      */