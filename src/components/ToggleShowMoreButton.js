import "./ToggleShowButton.css"

const ToggleShowButton = ({label, onClickHandler}) => {
    return (
        <div className="toggle-show-button-container" onClick={onClickHandler}>
            {label}
        </div>
    );
}
export default ToggleShowButton;