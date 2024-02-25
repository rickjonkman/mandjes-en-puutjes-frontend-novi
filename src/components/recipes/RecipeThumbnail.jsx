import Button from "../buttons/mutable/Button.jsx";
import {useNavigate} from "react-router-dom";

const RecipeThumbnail = ({title, prepTime, image, buttonClickHandler}) => {

    const imageUrl = `http://localhost:8080/api/recipes/open/download-image/${image}`;
    const navigate = useNavigate();

    return (
        <article
            className="recipe-thumbnail"
            style={{backgroundImage: `url(${imageUrl})`}}
        >

            <div className="recipe-thumbnail__container">
                <h2>{title}</h2>

                <div className="recipe-thumbnail__container--info">
                    <h4>{`${prepTime} min`}</h4>
                </div>
            </div>

            <div className="recipe-thumbnail__button-section">
                <Button
                    buttonType="button"
                    buttonClass="recipe-thumbnail--button"
                    buttonText="Open"
                    buttonClickHandler={buttonClickHandler}
                />
            </div>

        </article>
    );
};

export default RecipeThumbnail;