import ButtonIcon from "../../buttons/mutable/ButtonIcon.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";


const InstructionTagsComponent = ({register, instructionFieldRemove, instructionFields, instructionFieldAppend}) => {


    return (
        <div>
            {
                instructionFields.map((instruction, index) => {
                    return (

                        // Instructions Container: [STEP] [INSTRUCTION]
                        <section key={instruction.id} className="recipe-form__instructions--container">

                            {/* STEP */}
                            <label htmlFor="recipe-form__instructions--step-id">Stap #:
                                <input
                                    type="number"
                                    id="recipe-form__instructions--step-id"
                                    {...register(`instructions.${index}.step`, {
                                        valueAsNumber: true
                                    })}
                                />
                            </label>

                            {/* INSTRUCTION */}
                            <label htmlFor="recipe-form__instructions--instruction-id">Inhoud:
                                <input
                                    type="text"
                                    id="recipe-form__instructions--instruction-id"
                                    {...register(`instructions.${index}.instruction`)}
                                />
                            </label>

                            {/* Append Input Field Button */}
                            <ButtonIcon buttonClickHandler={() => {
                                instructionFieldAppend(
                                    [
                                        {
                                            step: 0,
                                            instruction: '',
                                        }
                                    ]
                                )
                            }}>

                                <FontAwesomeIcon icon={faPlus}/>

                            </ButtonIcon>

                            {/* Remove Input Field Button */}
                            <ButtonIcon buttonClickHandler={() =>
                                instructionFieldRemove(index)}>

                                <FontAwesomeIcon icon={faMinus}/>

                            </ButtonIcon>


                        </section>
                    )
                })
            }
        </div>
    );
};

export default InstructionTagsComponent;