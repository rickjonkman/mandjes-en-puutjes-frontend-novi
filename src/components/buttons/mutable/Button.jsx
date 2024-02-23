
const Button = ({ buttonType, buttonClass, buttonClickHandler, buttonText }) => {
    return (
        <button type={buttonType} className={buttonClass} onClick={buttonClickHandler}>
            {buttonText}
        </button>
    );
};

export default Button;