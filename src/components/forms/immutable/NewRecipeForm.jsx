import React from 'react';
import Form from "../mutable/Form.jsx";
import InputComponent from "../mutable/InputComponent.jsx";

const NewRecipeForm = ({handleFormSubmit, register}) => {

    const newRecipe = [
        "name",
        "servings",
        "preptime",
        "ingredients",
        "ingredientsMeasured",
        "tags",
        "supplies",
        "img",
        "createdBy",
    ]

    return (
        <Form formSubmit={handleFormSubmit}>

            <div className="new-recipe__input-fields">

                <div className="new-recipe__input-fields--field">
                    <InputComponent
                        inputName="recipe-name"
                        inputType="text"
                        inputLabel="Naam van je recept:"
                        register={register}
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Naam is verplicht',
                            }
                        }}
                        errors={errors}
                    />
                </div>

            </div>

        </Form>
    );
};

export default NewRecipeForm;