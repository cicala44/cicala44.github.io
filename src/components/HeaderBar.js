import "./HeaderBar.css"
import { useEffect, useState } from "react";
import NavButton from "./NavButtons.js";

const HeaderBar = (props) =>
{
    const[currentScreenSize, setScreenSize] = useState(window.screen.width);

    useEffect(() => {
        setScreenSize(window.screen.width);
    })

    const toggleHamburger = () => {
        let elements = document.getElementById("hamburger");
        elements.classList.toggle("click");

        let element = document.getElementById("banner-nav-section-mobile");
        if(element.className === "hidden") {
            element.className = "reveal"
        }
        else{
            element.className = "hidden"
        }
    }

    const navButtonLayout = () => {
        if(currentScreenSize > 450){
            return(
                <div id="banner-nav-section">
                    <NavButton ref="#About" text="About"/>
                    <NavButton ref="#Philosophy" text="Philosophy"/>
                    <NavButton ref="#service-section" text="Services"/>
                    <NavButton ref="#certificates-section" text="Certificates"/>
                    <NavButton ref="#Testimonials" text="Testimonials"/>
                    <NavButton ref="#footer-section" text="Contact"/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div id="banner-nav-section-mobile" class="hidden">
                        <NavButton ref="#About" text="About" mobileHandler={toggleHamburger}/>
                        <NavButton ref="#Philosophy" text="Philosophy" mobileHandler={toggleHamburger}/>
                        <NavButton ref="#service-section" text="Services" mobileHandler={toggleHamburger}/>
                        <NavButton ref="#certificates-section" text="Certificates" mobileHandler={toggleHamburger}/>
                        <NavButton ref="#Testimonials" text="Testimonials" mobileHandler={toggleHamburger}/>
                        <NavButton ref="#footer-section" text="Contact" mobileHandler={toggleHamburger}/>
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

    return(
        <div id="headerbar">
            <div id="banner-image-section">
                <img id="bannerlogo" src="/assets/banner.jpg"/>
            </div>
            <div id="slogan">
                Consistent & Persistent
            </div>
            {navButtonLayout()}
        </div>
    );
}
export default HeaderBar;