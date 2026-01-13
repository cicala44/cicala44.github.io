import ExitButton from "../components/ExitButton";
import ImageDisplayCard from "../components/ImageDisplayCard";
import ToggleShowButton from "../components/ToggleShowMoreButton";
import "./ImageGallerySection.css"
import { useEffect, useState, useRef } from "react";

const DEFAULT_ROW_CUT_OFF = 3;
const ImageGallerySection = () => {
    const [showExtended, setShowExtended] = useState(false);
    const [, setGatheredTotalGalleryRows] = useState(false);
    const [focusedImage, setFocusedImage] = useState(false);
    const [, setWindowSize] = useState({ width: undefined, height: undefined })
    const totalGalleryRows = useRef(0);
    const imageImports = require.context("../assets/galleryAssets", false);

    const handleFocusedImage = (url) => {
        setFocusedImage(url);
        let element = document.getElementById("root-body");
        element.style.overflowY = "hidden";
    }

    const handleDefocusImage = () => {
        setFocusedImage("");
        let element = document.getElementById("root-body");
        element.style.overflowY = "scroll";
    }

    const imageUrls = imageImports.keys().map(image => {
        return imageImports(image);
    });
    const images = imageUrls.map((url, index) => {
        return (
            <div key={url + index} className="image-gallery-image-member" onClick={() => handleFocusedImage(url)}>
                <ImageDisplayCard url={url} />
            </div>
        );
    });

    const getTotalRows = (id) => {
        let element = document.getElementById(id);
        if (!element)
            return 0;
        const childElements = Array.from(element.children);
        if (!childElements || childElements.length < 0)
            return 0;
        const rows = new Set();
        childElements.forEach(child => {
            rows.add(child.offsetTop);
        })

        return rows.size;
    }

    const extendSection = () => {
        setShowExtended(true);
    }

    const shrinkSection = () => {
        setShowExtended(false);
    }

    useEffect(() => {
        totalGalleryRows.current = getTotalRows("image-gallery-images");
        setGatheredTotalGalleryRows(true);

        if (focusedImage) {
            let element = document.getElementById("image-gallery-exit-button" + focusedImage);
            element.className = "exit-container fade-present";
        }
    }, [focusedImage]);

    useEffect(() => {
        const handleResize = () => {
            if (showExtended && totalGalleryRows.current <= DEFAULT_ROW_CUT_OFF) {
                setShowExtended(false);
            }

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
    }, [showExtended]);

    return (
        <div className="image-gallery-section-container">
            <div className="image-gallery-content-container">
                {(focusedImage && focusedImage !== "") ?
                    <div className="image-gallery-focused-image-container">
                        <div className="image-gallery-exit-container">
                            <ExitButton id={"image-gallery-exit-button" + focusedImage} onClickHandler={handleDefocusImage} sizeMultiplier={1} />
                        </div>
                        <div className="image-gallery-focused-image-content">
                            <img className="image-gallery-focused-image" src={focusedImage} alt={"Focused Image: " + focusedImage} />
                        </div>
                    </div>
                    :
                    null
                }
                <div className="section-title">
                    Gallery
                </div>
                {showExtended ?
                    <div className="image-gallery-show-less-button">
                        <ToggleShowButton label={"Show Less"} onClickHandler={shrinkSection} />
                    </div>
                    :
                    null
                }
                {totalGalleryRows.current > DEFAULT_ROW_CUT_OFF && !showExtended ?
                    <div>
                        <div id="image-gallery-images" className="image-gallery-images-limited">
                            {images}
                        </div>
                        <div className="image-gallery-show-more-button">
                            <ToggleShowButton label={"Show More"} onClickHandler={extendSection} />
                        </div>
                    </div>
                    :
                    <div id="image-gallery-images" className="image-gallery-images">
                        {images}
                    </div>
                }
            </div>
        </div>
    );
}
export default ImageGallerySection;