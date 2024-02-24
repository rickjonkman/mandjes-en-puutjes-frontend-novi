import {createContext, useEffect, useState} from "react";
import RecipePage from "../pages/recipes-pages/RecipePage.jsx";
import GroceriesListsPage from "../pages/groceries-pages/GroceriesListsPage.jsx";
import GroceriesShoppingMode from "../pages/groceries-pages/GroceriesShoppingMode.jsx";

import useFetch from "../hooks/UseFetch.jsx";

export const GroceriesContext = createContext({ });

const GroceriesContextProvider = () => {

    const jwtToken = localStorage.getItem('token');
    const fetchRecentListsURL = 'http://localhost:8080/api/users/shopping-list/get-recent-lists';
    const fetchCurrentListURL = 'http://localhost:8080/api/users/shopping-list/get-current-list';
    const headerObject = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`
    }

    const { sendRequest } = useFetch(fetchRecentListsURL, fetchCurrentListURL);


    const [currentShoppingList, setCurrentShoppingList] = useState({});
    const [recentShoppingLists, setRecentShoppingLists] = useState([]);
    const [groceries, setGroceries] = useState([
        { groceryName: '', }
    ]);

    useEffect(() => {
        void fetchRecentLists()
    }, []);

    useEffect(() => {
        void fetchCurrentShoppingList()
    }, []);

    async function fetchRecentLists() {

        const response = await sendRequest(headerObject);
        setRecentShoppingLists(response.data);
    }

    async function fetchCurrentShoppingList() {

        const response = await sendRequest(headerObject);
        setCurrentShoppingList(response.data);

    }


    const groceriesObject = {
        currentShoppingList,
        setCurrentShoppingList,
        recentShoppingLists,
        setRecentShoppingLists,
        groceries,
        setGroceries,
        headerObject,
    }

    return (
        <GroceriesContext.Provider value={groceriesObject}>
            <RecipePage />
            <GroceriesListsPage />
            <GroceriesShoppingMode />
        </GroceriesContext.Provider>
    )
}

export default GroceriesContextProvider;