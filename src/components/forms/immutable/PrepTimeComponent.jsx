import React from 'react';
import InputComponent from "../mutable/InputComponent.jsx";

const PrepTimeComponent = ({ register, errors }) => {



    return (
        <div className="prep-time__container">

            <h4>Bereidingstijd</h4>

            <div className="prep-time--input-fields">
            <InputComponent
                inputName="prepTimeHour"
                inputType="number"
                inputLabel="Uur"
                inputClass="prepHour"
                register={register}
                validationRules={{
                    required: {
                        value: true,
                        min: 0,
                        max: 12,
                        message: "Geef het aantal uren op"
                    }
                }}
                errors={errors}
            />

            <InputComponent
                inputName="prepTimeMin"
                inputClass="prepMin"
                inputLabel="Min"
                inputType="number"
                register={register}
                validationRules={{
                    required: {
                        value: true,
                        min: 0,
                        max: 59,
                        message: "Geef het aantal minuten op"
                    }
                }}
                errors={errors}
            />
            </div>

        </div>
    );
};

export default PrepTimeComponent;