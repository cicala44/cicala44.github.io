import { useEffect, useState } from "react";
import "./ImageSlider.css"

const ImageSlider = (props) =>
{
    const[currentImageIndex, setImageIndex] = useState(0);

    var listOfImages =[];

    useEffect(() => {
        const importAll = (r) => {
            return r.keys().map(r);
        }
        listOfImages = importAll(require.context('../assets/displayAssets/', false, /\.(png|jpe?g|svg)$/));
        setImage();
    })

    const slide = (direction) => {
        var newIndex;
        if(direction === "left")
        {
            newIndex = currentImageIndex - 1;
            if(newIndex < 0)
            {
                setImageIndex(listOfImages.length - 1);
            }
            else
            {
                setImageIndex(newIndex);
            }
        }
        else if(direction === "right")
        {
            newIndex = currentImageIndex + 1;
            if(newIndex >= listOfImages.length)
            {
                setImageIndex(0);
            }
            else
            {
                setImageIndex(newIndex);
            }
        }
        setImage();
    }

    const setImage = () => {
        var element = document.getElementById("display-image");
        element.src = listOfImages[currentImageIndex];
    }

    return(
        <div id="slider-body">
            <div id="display-container">
                <div id="image-sec">
                    <div id="display-image-container">
                        <img id="display-image"/>
                    </div>
                    <div id="left-arrow-container" onClick={() => slide("left")}>
                        <img id="left-arrow" src="./assets/arrow.png"/>
                    </div>
                    <div id="right-arrow-container" onClick={() => slide("right")}>
                        <img id="right-arrow" src="./assets/arrow.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImageSlider;