import "./CommentSection.css"
import { useEffect, useState } from "react";
import CommentCards from "./CommentCards.js";

const CommentSection = (props) =>
{
    var data = require("../data/comments.json");

    const[currentDisplayCommentIndex, setDisplayCommentIndex] = useState(0);

    useEffect(() => {
        
    })

    const setCards = () => {
        if(window.screen.width > 450){
            return(
                <div id="comment-container">
                    <div id="left-card" className="clickable-card" onClick={() => rotateCards("left")}>
                        <CommentCards comment={data[(currentDisplayCommentIndex - 1 < 0) ? data.length - 1 : currentDisplayCommentIndex - 1].comment} writer={data[(currentDisplayCommentIndex - 1 < 0) ? data.length - 1 : currentDisplayCommentIndex - 1].name} adjustSize="shrink"/>
                    </div>
                    <div id="center-card">
                        <CommentCards comment={data[currentDisplayCommentIndex].comment} writer={data[currentDisplayCommentIndex].name}/>
                    </div>
                    <div id="right-card" className="clickable-card" onClick={() => rotateCards("right")}>
                        <CommentCards comment={data[(currentDisplayCommentIndex + 1) % data.length].comment} writer={data[(currentDisplayCommentIndex + 1) % data.length].name} adjustSize="shrink"/>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div id="comment-container">
                    <div id="center-card">
                        <CommentCards comment={data[currentDisplayCommentIndex].comment} writer={data[currentDisplayCommentIndex].name}/>
                    </div>
                    <div id="left-arrow-container-card" onClick={() => rotateCards("left")}>
                        <img id="left-arrow-card" src="./assets/arrow.png"/>
                    </div>
                    <div id="right-arrow-container-card" onClick={() => rotateCards("right")}>
                        <img id="right-arrow-card" src="./assets/arrow.png"/>
                    </div>
                </div>
            );
        }
    }

    const rotateCards = (direction) => {
        var newIndex;
        if(direction === "left")
        {
            newIndex = currentDisplayCommentIndex - 1;
            if(newIndex < 0)
            {
                setDisplayCommentIndex(data.length - 1);
            }
            else
            {
                setDisplayCommentIndex(newIndex);
            }
        }
        else if(direction === "right")
        {
            newIndex = currentDisplayCommentIndex + 1;
            if(newIndex >= data.length)
            {
                setDisplayCommentIndex(0);
            }
            else
            {
                setDisplayCommentIndex(newIndex);
            }
        }
    }



    return(
        <div id="comment-section">
            <div id="comment-section-title">
                <h1>
                    Testimonials
                </h1>
            </div>
            {setCards()}
        </div>
    );
}
export default CommentSection;