import React, {useContext} from 'react';
import {GroceriesContext} from "../../context/GroceriesContext.jsx";
import GroceryListItem from "./GroceryListItem.jsx";
import GroceriesCurrentIcons from "./GroceriesCurrentIcons.jsx";
import NoListsFound from "./NoListsFound.jsx";

const CurrentGroceryListContainer = ({ currentShoppingList }) => {

    return (
        <div>
            {/*{*/}
            {/*    currentShoppingList.groceries.map((grocery, index) => {*/}
            {/*        return (*/}
            {/*            <GroceryListItem key={index}>*/}
            {/*                <GroceriesCurrentIcons />*/}
            {/*            </GroceryListItem>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </div>
    );
};

export default CurrentGroceryListContainer;