
const InputComponent = ({ inputClass, inputLabel, inputType, inputName, inputValue, register, validationRules, errors }) => {


    return (
        <div className="input-class">
            <label htmlFor={inputClass}>{inputLabel}</label>
            <input
                type={inputType}
                className={inputClass}
                name={inputName}
                value={inputValue}
                {...register(inputName, validationRules)}
            />
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </div>
    );
};

export default InputComponent;