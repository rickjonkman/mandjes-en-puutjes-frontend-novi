
const Form = ({ formSubmit, formTitle, children }) => {



    return (
        <form className="form" onSubmit={formSubmit}>
            <h1>{formTitle}</h1>
            {children}
        </form>
    );
};

export default Form;