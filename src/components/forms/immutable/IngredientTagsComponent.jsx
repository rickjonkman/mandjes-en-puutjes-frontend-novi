import React from 'react';
import ButtonIcon from "../../buttons/mutable/ButtonIcon.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

const IngredientTagsComponent = ({ register, ingredientFields, ingredientFieldAppend, ingredientFieldRemove }) => {



    return (
        <div className="recipe-form__ingredient-tags--class">
            {
                ingredientFields.map((ingredientField, index) => {
                    return (
                        <section key={ingredientField.id} className="recipe-form__ingredient-tags--container">

                            <label htmlFor="recipe-form__ingredient-tags--id">Aantal:
                                <input
                                    type="number"
                                    id="recipe-form__ingredient-tags--amount-id"
                                    {...register(`ingredients.${index}.amount`, {
                                        valueAsNumber: true
                                    })}
                                />
                            </label>

                            <label htmlFor="recipe-form__ingredient-tags--unit-id">Eenheid:
                                <input
                                    type="text"
                                    id="recipe-form__ingredient-tags--unit-id"
                                    {...register(`ingredients.${index}.unit`)}
                                />
                            </label>

                            <label htmlFor="recipe-form__ingredient-tags--name-id">Naam:
                                <input
                                    type="text"
                                    id="recipe-form__ingredient-tags--name-id"
                                    {...register(`ingredients.${index}.name`)}
                                />
                            </label>

                            <ButtonIcon buttonClickHandler={() => {
                                ingredientFieldAppend({tagName: ''})
                            }}>

                                <FontAwesomeIcon icon={faPlus} />

                            </ButtonIcon>

                            <ButtonIcon buttonClickHandler={() =>
                                ingredientFieldRemove(index)}>

                                <FontAwesomeIcon icon={faMinus} />

                            </ButtonIcon>

                        </section>
                    )
                })
            }
        </div>
    );
};

export default IngredientTagsComponent;