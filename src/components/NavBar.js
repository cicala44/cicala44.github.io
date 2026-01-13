import "./NavBar.css"
import { useEffect, useState } from "react";
import NavButton from "./NavButtons.js";

const NavBar = (props) => {
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

    const toggleHamburger = () => {
        let elements = document.getElementById("hamburger");
        elements.classList.toggle("click");

        let element = document.getElementById("banner-nav-section-mobile");
        if (element.className === "hidden") {
            element.className = "reveal"
        }
        else {
            element.className = "hidden"
        }
    }

    const navButtonLayout = () => {
        if (windowSize.width > 1150) {
            return (
                <div id="nav-button-section">
                    <NavButton ref="#About" text="About" />
                    <NavButton ref="#Services" text="Services" />
                    <NavButton ref="#Testimonials" text="Testimonials" />
                    <NavButton ref="#Contact" text="Contact" />
                </div>
            )
        }
        else {
            return (
                <div className="nav-mobile-menu-container">
                    <div id="banner-nav-section-mobile" className="hidden">
                        <NavButton ref="#About" text="About" mobileHandler={toggleHamburger} />
                        <NavButton ref="#Services" text="Services" mobileHandler={toggleHamburger} />
                        <NavButton ref="#Testimonials" text="Testimonials" mobileHandler={toggleHamburger} />
                        <NavButton ref="#Contact" text="Contact" />
                    </div>
                    <div id="hamburger" onClick={() => toggleHamburger()}>
                        <div id="bar1" className="bar"></div>
                        <div id="bar2" className="bar"></div>
                        <div id="bar3" className="bar"></div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div id="navbar">
            <div id="logo-image-section">
                <img id="bannerlogo" src="/assets/banner.jpg" alt="Endurance Legion Logo" />
            </div>
            {navButtonLayout()}
        </div>
    );
}
export default NavBar;