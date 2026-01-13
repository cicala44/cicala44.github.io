import "./CertificateDisplayCard.css"

const CertificateDisplayCard = ({name, image}) => {
    return (
        <div className="certificate-display-card-container">
            <div className="certificate-display-card-image-container">
                <img className="certificate-logo-image" src={image} alt={name + " logo"}/>
            </div>
            <div className="certificate-display-card-name-container">
                {name}
            </div>
        </div>
    );
}
export default CertificateDisplayCard;