import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";


const ButtonTransitionEffect = ({ buttonClickHandler }) => {
    return (
        <button type="button" className="button__go-back" onClick={buttonClickHandler}>
            <FontAwesomeIcon icon={faChevronLeft} id="button__go-back--icon"/>
        </button>
    );
};

export default ButtonTransitionEffect;