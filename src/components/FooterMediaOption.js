import "./FooterMediaOption.css"

const FooterMediaOption = ({ image, mediaLink, altName }) => {
    const goToLink = (link) => {
        window.open(link);
    }

    return (
        <div className="footer-social-option">
            <img className="footer-social-image" src={image} onClick={() => goToLink(mediaLink)} alt={altName} />
        </div>
    );
}
export default FooterMediaOption;