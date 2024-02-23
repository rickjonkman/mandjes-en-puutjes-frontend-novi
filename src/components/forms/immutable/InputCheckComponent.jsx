import '/src/scss/components/form-elements.scss';
const InputCheckComponent = ({ register, inputName, inputValue, inputLabel, inputClass, validationRules, errors, children }) => {



    return (
        <div className="special-checkbox">
            <label htmlFor={inputClass}>
                <div className="cb-and-icon">
                    <input
                        type="checkbox"
                        className={inputClass}
                        name={inputName}
                        value={inputValue}
                        {...register(inputName, validationRules)}
                    />
                    {children}
                </div>
                <p>{inputLabel}</p>
            </label>
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </div>
    );
};

export default InputCheckComponent;