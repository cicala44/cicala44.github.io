import { useEffect, useState } from "react";
import "./TestimonialCard.css"

const TestimonialCard = ({ id, name, title, testimonial, testimonialImages }) => {
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

    const generateImageContainers = () => {
        let images = testimonialImages;
        if (testimonialImages.length > 2) {
            console.error("Too many images listed, only displaying the first 2");
            images = testimonialImages.subarray(0, 2);
        }
        if (testimonialImages.length > 0) {
            if (windowSize.width > 550) {
                return images.map((image, index) => {
                    return (
                        <div key={image + index} className={testimonialImages.length === 2 ? "testimonial-display-image-container-2x" : "testimonial-display-image-container"}>
                            <img className="testimonial-display-image" src={image} alt={name + " image" + index} key={name + "displayImage" + index} />
                        </div>
                    )
                })
            } else {
                return (
                    <div key={"testimonial-image" + images[0]} className={"testimonial-display-image-container"}>
                        <img className="testimonial-display-image" src={images[0]} alt={name + " image"} key={name + "displayImage"} />
                    </div>
                )
            }
        }
        return (
            <div className={"testimonial-display-image-container"}>
                <img className="testimonial-display-image" src={"/assets/banner.jpg"} alt={name + " image"} key={name + "displayImage"} />
            </div>
        )
    }
    return (
        <div className="testimonial-card">
            <div className="testimonial-text-container">
                <div className="testimonial-header-container">
                    <h2 className="testimonial-name">{name}</h2>
                    {title !== undefined && title !== "" ?
                        <h4 className="testimonial-title">{title}</h4>
                        :
                        null
                    }
                </div>
                <div className="testimonial-content">
                    {testimonial}
                </div>
            </div>
            <div className="testimonial-image-container">
                {generateImageContainers()}
            </div>
        </div>
    );
}
export default TestimonialCard;