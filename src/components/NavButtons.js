import "./NavButton.css"

const NavButton = (props) =>
{
    const attemptMobileHandle = () => {
        if(props.mobileHandler !== undefined) {
            props.mobileHandler();
        }
    }

    return(
        <div className="nav-button">
            <a href={props.ref} className="anchor-text" onClick={attemptMobileHandle}>
                {props.text}
            </a>
        </div>
    );
}
export default NavButton;