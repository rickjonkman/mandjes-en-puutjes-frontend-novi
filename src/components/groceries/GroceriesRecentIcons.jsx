import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus, faStar} from "@fortawesome/free-solid-svg-icons";


const GroceriesRecentIcons = () => {
    return (
        <div className="groceries-recent__icons">
            <FontAwesomeIcon icon={faSquarePlus} />
            <FontAwesomeIcon icon={faStar} />
        </div>
    );
};

export default GroceriesRecentIcons;