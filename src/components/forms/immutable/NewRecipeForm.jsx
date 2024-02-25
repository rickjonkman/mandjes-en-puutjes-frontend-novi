
import Form from "../mutable/Form.jsx";
import InputComponent from "../mutable/InputComponent.jsx";
import PrepTimeComponent from "./PrepTimeComponent.jsx";
import {useFieldArray, useForm} from "react-hook-form";
import RecipeTagsComponent from "./RecipeTagsComponent.jsx";
import IngredientTagsComponent from "./IngredientTagsComponent.jsx";
import InstructionTagsComponent from "./InstructionTagsComponent.jsx";
import '/src/scss/components/recipes--new-recipe-form.scss';
import SubmitButton from "../../buttons/mutable/SubmitButton.jsx";

const NewRecipeForm = () => {


    const {
        register,
        handleSubmit,
        control,
        formState: {errors}
    } = useForm(
        {
            defaultValues: {
                recipeName: '',
                servings: 0,
                prepTimeHour: 0,
                prepTimeMin: 0,
                tags: [
                    {
                        tagName: ''
                    }
                ],
                measuredIngredients: [
                    {
                        amount: 0,
                        unit: '',
                        name: '',
                    }
                ],
                instructions: [
                    {
                        step: 0,
                        instruction: '',
                    }
                ],
                createdByUser: ''
            }
        })

    const {
        fields: tagFields,
        append: tagFieldAppend,
        remove: tagFieldRemove
    } = useFieldArray({
        name: "tags", control
    })

    const {
        fields: ingredientFields,
        append: ingredientFieldAppend,
        remove: ingredientFieldRemove
    } = useFieldArray({
        name: "measuredIngredients", control
    })

    const {
        fields: instructionFields,
        append: instructionFieldAppend,
        remove: instructionFieldRemove
    } = useFieldArray({
        name: "instructions", control
    })

    function handleFormSubmit() {

    }

    return (
        <Form
            formSubmit={handleSubmit(handleFormSubmit)}
            formTitle="Voeg een nieuw recept toe">

            <div className="new-recipe__input-fields">

                <div className="new-recipe__input-fields--field">
                    <InputComponent
                        inputName="recipe-name"
                        inputType="text"
                        inputLabel="Naam van je recept:"
                        inputClass="form--text-input"
                        inputContainerClass="input-class"
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

                <div className="new-recipe__input-fields--field">
                    <InputComponent
                        inputName="servings"
                        inputType="number"
                        inputLabel="Aantal personen:"
                        inputClass="form--number-input"
                        inputContainerClass="input-class"
                        register={register}
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Vul het aantal personen in',
                            }
                        }}
                        errors={errors}
                    />
                </div>

                <PrepTimeComponent register={register} errors={errors}/>

                <RecipeTagsComponent
                    register={register}
                    control={control}
                    tagFields={tagFields}
                    tagFieldAppend={tagFieldAppend}
                    tagFieldRemove={tagFieldRemove}
                    errors={errors}
                />

                <IngredientTagsComponent
                    register={register}
                    ingredientFields={ingredientFields}
                    ingredientFieldAppend={ingredientFieldAppend}
                    ingredientFieldRemove={ingredientFieldRemove}
                />

                <InstructionTagsComponent
                    register={register}
                    control={control}
                    instructionFields={instructionFields}
                    instructionFieldAppend={instructionFieldAppend}
                    instructionFieldRemove={instructionFieldRemove}
                    errors={errors}
                />

            </div>

            <SubmitButton />

        </Form>
    );
};

export default NewRecipeForm;