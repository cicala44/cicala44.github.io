import "./ImageDisplayCard.css"

const ImageDisplayCard = ({url}) => {
    return (
        <div className="image-display-card-container">
            <img src={url} className="image-display-card-image" alt="gallery-image" />
        </div>
    );
}
export default ImageDisplayCard;