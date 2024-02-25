const Form = ({formSubmit, formTitle, children}) => {


    return (
        <form className="form" onSubmit={formSubmit}>
            <div className="form__title--bg">
                <h1>{formTitle}</h1>
            </div>
            {children}
        </form>
    );
};

export default Form;