import { testimonials } from "../data/testimonials";
import PreviewTestimonialCard from "../components/PreviewTestimonialCard";
import "./TestimonialSection.css";
import "../components/PreviewTestimonialCard.css"
import "../App.css"
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const MOBILE_WIDTH = 550;
const SWIPE_THRESHOLD = 50;

const variants = {
    main: direction => ({
        x: [direction === "right" ? "22vw" : "-22vw", 0],
        scale: [0.5, 1],
        opacity: [0.5, 1],
        pointerEvents: ["none", "auto"]
    }),
    left: direction => ({
        x: [direction === "right" ? "0vw" : "-30vw", "-22vw"],
        scale: [direction === "right" ? 1 : 0.3, 0.8],
        opacity: [direction === "right" ? 1 : 0.75, 0.75],
    }),
    leftHidden: direction => ({
        x: ["-22vw", "-40vw"],
        scale: [0.8, 0.5],
        opacity: [direction === "right" ? 0.5 : 0, 0],
    }),
    right: direction => ({
        x: [direction === "right" ? "30vw" : "0vw", "22vw"],
        scale: [direction === "right" ? 0.3 : 1, 0.8],
        opacity: [direction === "right" ? 0.75 : 1, 0.75],
    }),
    rightHidden: direction => ({
        x: ["22vw", "40vw"],
        scale: [0.8, 0.5],
        opacity: [direction === "right" ? 0 : 0.5, 0],
    }),
};

const TestimonialSection = () => {

    const [loadIndex, setLoadIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const [isViewingCard, setIsViewingCard] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth ? window.innerWidth : undefined,
        height: window.innerHeight ? window.innerHeight : undefined,
    });

    const isMobile = windowSize.width < MOBILE_WIDTH;

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

    const tickLoadIndex = (direction) => {
        if (direction === 'right') {
            setLoadIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setDirection('right');
        }
        else if (direction === 'left') {
            setLoadIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
            setDirection('left');
        }
    }

    const toggleIsViewingCard = () => {
        setIsViewingCard(!isViewingCard);
    }

    const handleOnClick = (index) => {
        if (isMobile)
            return;
        if (index === 1) {
            tickLoadIndex('left');
        }
        else if (index === 3) {
            tickLoadIndex('right');
        }
    }

    const handleOnDragEnd = (_, info) => {
        if (!isMobile)
            return;

        const offsetX = info.offset.x;

        if (Math.abs(offsetX) < SWIPE_THRESHOLD) {
            return;
        }

        if (offsetX > 0) {
            tickLoadIndex('left');
        } else {
            tickLoadIndex('right');
        }
    }

    const previewCards = [testimonials[
        (((loadIndex - 2) % testimonials.length) + testimonials.length) % testimonials.length],
    testimonials[(((loadIndex - 1) % testimonials.length) + testimonials.length) % testimonials.length],
    testimonials[loadIndex], testimonials[(loadIndex + 1) % testimonials.length],
    testimonials[(((loadIndex + 2) % testimonials.length) + testimonials.length) % testimonials.length]
    ].map((testimonial, index) => {
        const isMainCard = index === 2;
        const canMobileDrag = isMobile && isMainCard && !isViewingCard;
        return (
            <motion.div
                id={index === 1 ? "left" : index === 3 ? "right" : index < 1 ? "left-hidden" : index > 3 ? "right-hidden" : "main"}
                onClick={() => handleOnClick(index)}
                drag={canMobileDrag ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                dragMomentum={false}
                onDragEnd={canMobileDrag ? handleOnDragEnd : null}
                dragSnapToOrigin
                key={testimonial.name + testimonial.id}
                custom={direction}
                variants={variants}
                initial={false}
                animate={index === 1 ? "left" : index === 3 ? "right" : index < 1 ? "leftHidden" : index > 3 ? "rightHidden" : "main"}
                transition={{
                    type: "spring", stiffness: 200, damping: 50,
                }}>
                <PreviewTestimonialCard
                    id={testimonial.id}
                    name={testimonial.name}
                    title={testimonial.title}
                    previewImage={testimonial.previewImage}
                    testimonial={testimonial.testimonial}
                    testimonialImages={testimonial.testimonialImages}
                    mobileImage={testimonial.mobileImage}
                    isMain={isMainCard}
                    onClick={toggleIsViewingCard}
                />
            </motion.div>
        );
    });

    const indexBubbles = () => {
        let elements = [];
        for (let i = 0; i < testimonials.length; i++) {
            elements.push(
                <div key={"bubble" + i} className={(i === loadIndex) ? "index-bubble bubble-filled" : "index-bubble bubble-empty"} />
            )
        }
        return elements;
    }

    return (
        <div className="testimonial-section-container">
            <div className="section-title">
                Testimonials
            </div>
            <div className="preview-cards-container">
                {previewCards}
            </div>
            <div className="index-bubble-container">
                {indexBubbles()}
            </div>
        </div>
    )
}
export default TestimonialSection;