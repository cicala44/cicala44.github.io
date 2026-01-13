import { testimonials } from "../data/testimonials";
import PreviewTestimonialCard from "../components/PreviewTestimonialCard";
import "./TestimonialSection.css";
import "../components/PreviewTestimonialCard.css"
import "../App.css"
import { useState } from "react";
import { motion } from "motion/react";

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

const TestimonialSection = (props) => {

    const [loadIndex, setLoadIndex] = useState(0);
    const [direction, setDirection] = useState('right');

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

    const previewCards = [testimonials[(((loadIndex - 2) % testimonials.length) + testimonials.length) % testimonials.length], testimonials[(((loadIndex - 1) % testimonials.length) + testimonials.length) % testimonials.length], testimonials[loadIndex], testimonials[(loadIndex + 1) % testimonials.length], testimonials[(((loadIndex + 2) % testimonials.length) + testimonials.length) % testimonials.length]].map((testimonial, index) => {
        return (
            <motion.div id={index === 1 ? "left" : index === 3 ? "right" : index < 1 ? "left-hidden" : index > 3 ? "right-hidden" : "main"} onClick={() => (index === 1 ? tickLoadIndex('left') : index === 3 ? tickLoadIndex('right') : null)}
                key={testimonial.name + testimonial.id + index}
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
                    isMain={index === 2}
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