import '/src/scss/components/block-items.scss';
import {addHashTag} from "../../helpers/addHashTag.js";
import Button from "../buttons/mutable/Button.jsx";
import {useNavigate} from "react-router-dom";

const BlockItem = ({subject, blockTitle, blockSubtitle, buttonText, endpoint}) => {

    const navigate = useNavigate();

    function navigateToPage(e, endpoint) {
        e.preventDefault();
        navigate(endpoint);
    }

    return (
        <>
            <article className="block-item__article-class">
                <div className="block-item__text-section">
                    <span>{addHashTag(subject)}</span>
                    <h2>{blockTitle}</h2>
                    <h3>{blockSubtitle}</h3>
                </div>

                <div className="block-item__button-section">
                    <Button
                        buttonText={buttonText}
                        buttonType="button"
                        buttonClass="block-item--button"
                        buttonClickHandler={(e) => navigateToPage(e, endpoint)}
                    />
                </div>

            </article>
        </>

    );
};

export default BlockItem;