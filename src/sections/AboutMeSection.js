import "./AboutMeSection.css";
import "../App.css"
import ProfileImage from "../assets/displayAssets/unnamed.jpg"
import { useEffect, useState } from "react";

const MOBILE_WIDTH = 550;
const AboutMeSection = () => {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <div className="about-me-section-container">
            <div className="about-me-content-container">
                <div className="section-title">
                    Meet the Coach
                </div>
                {windowSize.width > MOBILE_WIDTH ?
                    <div className="about-me-content-section">
                        <div className="about-me-text-content-container">
                            <div className="about-me-text-content-title">
                                Hi, I'm Chris!
                            </div>
                            <div className="about-me-text-content">
                                I have been involved in multisport and endurance events for over 15 years and has completed more than 100 races including multiple Ironman and 70.3 events! Inspired years ago by a simple bike ride on a sunny afternoon a fire was lit that burns larger and hotter than ever with the opportunity to bring endurance into the lives of others!
                            </div>
                        </div>
                        <div className="about-me-image-content-container">
                            <div className="about-me-image-content">
                                <img className="about-me-profile-image" src={ProfileImage} alt="Chris Cicala" />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="about-me-content-section">
                        <div className="about-me-image-content-container">
                            <div className="about-me-image-content">
                                <img className="about-me-profile-image" src={ProfileImage} alt="Chris Cicala" />
                            </div>
                        </div>
                        <div className="about-me-text-content-container">
                            <div className="about-me-text-content-title">
                                Hi, I'm Chris!
                            </div>
                            <div className="about-me-text-content">
                                I have been involved in multisport and endurance events for over 15 years and has completed more than 100 races including multiple Ironman and 70.3 events! Inspired years ago by a simple bike ride on a sunny afternoon a fire was lit that burns larger and hotter than ever with the opportunity to bring endurance into the lives of others!
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
export default AboutMeSection;