

const SubmitButton = ({ buttonText, buttonClass, submitHandler }) => {



    return (
        <button type="submit" className={buttonClass} onSubmit={submitHandler}>
            {buttonText}
        </button>
    );
};

export default SubmitButton;