import { useEffect, useState } from "react";
import "./ExitButton.css"
import XSymbole from "../assets/misc/X_Symbole.png"

const ExitButton = ({id, onClickHandler, sizeMultiplier}) => {
    let [updatedState, setUpdatedState] = useState(false);
    useEffect(() => {
        if(sizeMultiplier && !updatedState) {
            let element = document.getElementById(id);
            if(element) {
                element.style.width = `${element.clientWidth * sizeMultiplier}px`;
                element.style.height = `${element.clientHeight * sizeMultiplier}px`;
            }
        }
        setUpdatedState(true);
    }, [sizeMultiplier, updatedState, id]);

    return (
        <div id={id} className="exit-container exit-container-hide" onClick={onClickHandler}>
            <img className="exit-image" src={XSymbole} alt={"Exit Symbole"} />
        </div>
    );
}
export default ExitButton;