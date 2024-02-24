import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleQuestion, faDeleteLeft} from "@fortawesome/free-solid-svg-icons";


const GroceriesCurrentIcons = () => {
    return (
        <div className="groceries-current__icons">
            <FontAwesomeIcon icon={faCircleCheck} />
            <FontAwesomeIcon icon={faCircleQuestion} />
            <FontAwesomeIcon icon={faDeleteLeft} />
        </div>
    );
};

export default GroceriesCurrentIcons;