
import GroceryListItem from "./GroceryListItem.jsx";
import GroceryList from "./GroceryList.jsx";
import {useContext, useState} from "react";
import {GroceriesContext} from "../../context/GroceriesContext.jsx";
import GroceriesRecentIcons from "./GroceriesRecentIcons.jsx";
import GroceriesCurrentIcons from "./GroceriesCurrentIcons.jsx";
import NoListsFound from "./NoListsFound.jsx";


const GroceryListContainer = () => {

    const {recentShoppingLists} = useContext(GroceriesContext);
    const {pathname} = location;

    return (
        <div className="grocery-list__container">
            {
                (recentShoppingLists) ?
                recentShoppingLists.map((list) => (
                    <GroceryList key={list.id}>
                        {
                            list.map((item) => (
                                <GroceryListItem key={item.id} grocery={item.groceryName}>
                                    { pathname === '/groceries/lists' && <GroceriesRecentIcons /> }
                                    { pathname === '/groceries/shopping-mode' && <GroceriesCurrentIcons /> }
                                </GroceryListItem>
                            ))
                        }
                    </GroceryList>
                )) : <NoListsFound pathname={pathname} />

            }
        </div>
    );
};

export default GroceryListContainer;