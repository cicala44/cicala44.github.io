import "./NavButton.css"

const NavButton = (props) => {
    const attemptMobileHandle = () => {
        if (props.mobileHandler !== undefined) {
            props.mobileHandler();
        }
    }

    return (
        <a href={props.href} className="anchor-text" onClick={attemptMobileHandle}>
            <div className="nav-button">
                {props.text}
            </div>
        </a>
    );
}
export default NavButton;