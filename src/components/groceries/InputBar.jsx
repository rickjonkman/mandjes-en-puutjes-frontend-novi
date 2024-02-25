import React from 'react';
import Button from "../buttons/mutable/Button.jsx";
import SubmitButton from "../buttons/mutable/SubmitButton.jsx";

const InputBar = ({register, inputName, validationRules, notFoundInputButton}) => {


    return (
        <div className="nothing-found__input-bar">

            <label htmlFor="add-grocery--id" id="input-bar__label"><span>Product:</span>

                <input
                    type="text"
                    id="add-grocery--id"
                    name="add-grocery"
                    {...register(inputName, validationRules)}
                />

                <SubmitButton
                    buttonText=">"
                    buttonClass="not-found__input--button"
                    submitHandler={notFoundInputButton}
                />

            </label>

        </div>
    );
};

export default InputBar;