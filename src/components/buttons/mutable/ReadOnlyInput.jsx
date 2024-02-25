import React from 'react';

const ReadOnlyInput = ({ inputType, inputName, inputLabel, inputId, placeholder, register, validationRules, errors }) => {



    return (
        <>
            <label htmlFor={inputId}>{inputLabel}</label>

            <input
                type={inputType}
                id={inputId}
                placeholder={placeholder}
                readOnly
                disabled
                {...register(inputName, validationRules)}
            />

            {errors[inputName] && <p>{errors[inputName].message}</p> }
        </>
    );
};

export default ReadOnlyInput;