import React from 'react';
import Button from "../buttons/mutable/Button.jsx";
import SubmitButton from "../buttons/mutable/SubmitButton.jsx";

const InputBar = ({inputOnChange, inputValue, notFoundInputButton}) => {


    return (
        <div className="nothing-found__input-bar">

            <label htmlFor="add-grocery--id" id="input-bar__label"><span>Product:</span>

                <input
                    type="text"
                    id="add-grocery--id"
                    name="add-grocery"
                    onChange={inputOnChange}
                    value={inputValue}
                    placeholder="Voeg een product toe..."
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