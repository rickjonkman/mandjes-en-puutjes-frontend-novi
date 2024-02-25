import ButtonIcon from "../../buttons/mutable/ButtonIcon.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";


const RecipeTagsComponent = ({register, tagFields, tagFieldAppend, tagFieldRemove}) => {


    return (
        <div className="recipe-form__recipe-tags--class">
            {
                tagFields.map((tagField, index) => {
                    return (
                        <section key={tagField.id} className="recipe-form__fields--section">

                            <label htmlFor="recipe-form__tags--id">Tags:

                                <input
                                    type="text"
                                    id="recipe-form__tags--id"
                                    {...register(`tags.${index}.name`)}
                                />

                            </label>

                            <div className="tags-component--buttons">
                                <ButtonIcon buttonClickHandler={() => {
                                    tagFieldAppend({tagName: ''})
                                }}>

                                    <FontAwesomeIcon icon={faPlus}/>

                                </ButtonIcon>

                                <ButtonIcon buttonClickHandler={() =>
                                    tagFieldRemove(index)}>

                                    <FontAwesomeIcon icon={faMinus}/>

                                </ButtonIcon>
                            </div>

                        </section>
                    )
                })
            }
        </div>
    );
};

export default RecipeTagsComponent;