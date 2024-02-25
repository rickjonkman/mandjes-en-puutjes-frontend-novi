import {useContext} from "react";
import {GroceriesContext} from "../../context/GroceriesContext.jsx";
import GroceryList from "./GroceryList.jsx";
import GroceryListItem from "./GroceryListItem.jsx";


const GroceryListContainer = () => {

    const { recentShoppingLists } = useContext(GroceriesContext);

    return (
        <div className="grocery-list__container">
            {
                recentShoppingLists.map((list) => (
                    <GroceryList key={list.id} >
                        <h2>{list.creationDate}</h2>
                        {
                            list.groceries.map((item, index) => (
                                <GroceryListItem key={index} grocery={item.grocery} />
                            ))
                        }
                    </GroceryList>
                ))
            }
        </div>
    );
};

export default GroceryListContainer;