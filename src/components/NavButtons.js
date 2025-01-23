import "./NavButton.css"

const NavButton = (props) =>
{

    const attemptMobileHandle = () => {
        if(props.mobileHandler !== undefined) {
            props.mobileHandler();
        }
    }

    return(
        <div class="nav-button">
            <a href={props.ref} class="anchor-text" onClick={attemptMobileHandle}>
                {props.text}
            </a>
        </div>
    );
}
export default NavButton;