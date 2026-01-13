import { useEffect, useRef, useState } from "react";
import "./PreviewTestimonialCard.css";
import TestimonialCard from "./TestimonialCard";
import { AnimatePresence, motion } from "motion/react";
import DefaultImage from "../assets/testimonialAssets/Default.png";
import ExitButton from "./ExitButton";

const variants = {
    open: testimonyCardAnimationWrapperSize => (
        window.innerWidth > 550 ?
            {
                transform: ["translate(-50%, -40%)", "translate(-50%, -50%)", "translate(-50%, -50%)"],
                width: [testimonyCardAnimationWrapperSize.current[0] * 0.6, testimonyCardAnimationWrapperSize.current[0] * 0.6, testimonyCardAnimationWrapperSize.current[0] * 1],
                opacity: [0, 1, 1]
            }
            :
            {
                transform: ["translate(-50%, -40%)", "translate(-50%, -50%)", "translate(-50%, -50%)"],
                height: [testimonyCardAnimationWrapperSize.current[1] * 0.5, testimonyCardAnimationWrapperSize.current[1] * 0.5, testimonyCardAnimationWrapperSize.current[1] * 1],
                opacity: [0, 1, 1]
            }
    ),
    close: testimonyCardAnimationWrapperSize => (
        window.innerWidth > 550 ?
            {
                transform: ["translate(-50%, -50%)", "translate(-50%, -50%)", "translate(-50%, -40%)"],
                width: [testimonyCardAnimationWrapperSize.current[0] * 1, testimonyCardAnimationWrapperSize.current[0] * 0.6, testimonyCardAnimationWrapperSize.current[0] * 0.6],
                opacity: [1, 1, 0],
            }
            :
            {
                transform: ["translate(-50%, -50%)", "translate(-50%, -50%)", "translate(-50%, -40%)"],
                height: [testimonyCardAnimationWrapperSize.current[1] * 1, testimonyCardAnimationWrapperSize.current[1] * 0.5, testimonyCardAnimationWrapperSize.current[1] * 0.5],
                opacity: [1, 1, 0],
            }
    )
};

const PreviewTestimonialCard = ({ id, name, title, previewImage, testimonial, testimonialImages, isMain }) => {
    const [displayContent, setDisplayContent] = useState(false);
    const [isInViewPort, setIsInViewport] = useState(false);
    const testimonyCardAnimationWrapperSize = useRef([0, 0]);
    const exitingAnimationPlaying = useRef(false);
    const viewPortRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInViewport(true);
                } else {
                    setIsInViewport(false);
                }
            });
        }, { threshold: 0.1 });

        if (viewPortRef.current) {
            observer.observe(viewPortRef.current);
        }

        const viewPortCurrentRef = viewPortRef.current;

        return () => {
            if (viewPortCurrentRef) {
                observer.unobserve(viewPortCurrentRef);
            }
        }
    }, [viewPortRef]);

    useEffect(() => {
        if (displayContent && !isInViewPort) {
            exitDisplayCard();
        }
    }, [displayContent, isInViewPort]);

    const displayCard = () => {
        let leftElement = document.getElementById("left");
        leftElement.className = "slide-out-left";
        leftElement.style.pointerEvents = "none";
        let rightElement = document.getElementById("right");
        rightElement.className = "slide-out-right";
        rightElement.style.pointerEvents = "none";
        setDisplayContent(true);
    }

    const exitDisplayCard = () => {
        exitingAnimationPlaying.current = true;
        let leftElement = document.getElementById("left");
        leftElement.className = "slide-back-left";
        leftElement.style.pointerEvents = "none";
        let rightElement = document.getElementById("right");
        rightElement.className = "slide-back-right";
        rightElement.style.pointerEvents = "none";
        setDisplayContent(false);
    }

    const beginAnimation = () => {
        hideExitButton();
        if (exitingAnimationPlaying.current) {
            let element = document.getElementById("testimoneyAnimationWrapperId" + name + id);
            element.className = "testimony-card-animation-wrapper";
        } else {
            getSizeofAnimationWrapper();
        }
    }

    const endAnimation = () => {
        if (exitingAnimationPlaying.current) {
            let leftElement = document.getElementById("left");
            leftElement.className = "";
            leftElement.style.pointerEvents = "auto";
            let rightElement = document.getElementById("right");
            rightElement.className = "";
            rightElement.style.pointerEvents = "auto";
            exitingAnimationPlaying.current = false;
        } else {
            let element = document.getElementById("testimoneyAnimationWrapperId" + name + id);
            element.className = element.className + " card-animation-wrapper-complete";
            element.style = null;
            revealExitButton();
        }
    }

    const getSizeofAnimationWrapper = () => {
        let element = document.getElementById(name + id + "wrapper");
        testimonyCardAnimationWrapperSize.current = [element.clientWidth, element.clientHeight];
    }

    const revealExitButton = () => {
        let element = document.getElementById(name + id + "exit");
        element.className = "exit-container fade-present";
    }

    const hideExitButton = () => {
        let element = document.getElementById(name + id + "exit");
        element.className = "exit-container exit-container-hide";
    }

    return (
        <div ref={viewPortRef}>
            <AnimatePresence mode="wait">
                {displayContent ?
                    <div>
                        <motion.div
                            className="testimony-card-animation-wrapper"
                            id={"testimoneyAnimationWrapperId" + name + id}
                            key={"testimoneyAnimationWrapper" + name + id}
                            custom={testimonyCardAnimationWrapperSize}
                            variants={variants}
                            initial={false}
                            animate={"open"}
                            exit={"close"}
                            onAnimationStart={beginAnimation}
                            onAnimationComplete={endAnimation}
                            transition={{
                                duration: 1
                            }}>
                            <div id={name + id + "wrapper"} className="testimony-card-wrapper">
                                <div className="testimony-card-exit-button-container">
                                    <ExitButton id={name + id + "exit"} onClickHandler={exitDisplayCard} />
                                </div>
                                <div className="testimony-card-container">
                                    <TestimonialCard
                                        id={id}
                                        name={name}
                                        title={title}
                                        testimonial={testimonial}
                                        testimonialImages={testimonialImages}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    :
                    null
                }
            </AnimatePresence>
            <div className={"preview-testimonial-card"} onClick={() => isMain === true && displayContent !== true ? displayCard() : null}>
                <div className="preview-testimonial-content-container">
                    <div className="preview-image-container">
                        <img className="preview-image" src={previewImage && previewImage !== "" ? previewImage : DefaultImage} alt={name + " preview"} />
                    </div>
                    <div className="preview-text-container">
                        <h3>{name}</h3>
                        {(title && title !== "") ?
                            <h4>{title}</h4>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PreviewTestimonialCard;
