import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const GroceriesContext = createContext({});

const GroceriesContextProvider = ({ children }) => {

    const jwtToken = localStorage.getItem('token');
    const fetchRecentShoppingListsURL = 'http://localhost:8080/api/users/shopping-list/get-recent-lists';
    const fetchCurrentShoppingListURL = 'http://localhost:8080/api/users/shopping-list/get-current-list';

    const [recentShoppingLists, setRecentShoppingLists] = useState([]);
    const [currentShoppingList, setCurrentShoppingList] = useState({
        id: 0,
        groceries: [
            {grocery: ''}
        ]
    });

    useEffect(() => {
        void fetchCurrentShoppingList;
    }, []);

    useEffect(() => {
        void fetchRecentShoppingLists();
    }, []);

    async function fetchCurrentShoppingList() {

        try {
            const response = await axios.get(fetchCurrentShoppingListURL, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                }
            })
            setCurrentShoppingList(response)

        } catch (e) {
            console.error(e);
        }
    }

    async function fetchRecentShoppingLists() {

        try {
            const response = await axios.get(fetchRecentShoppingListsURL, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                }
            })
            console.log(response)
            setRecentShoppingLists(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    console.log(recentShoppingLists)


    const groceriesObject = {
        currentShoppingList,
        recentShoppingLists,
    }

    console.log(currentShoppingList)

    return (
        <GroceriesContext.Provider value={groceriesObject}>
            {children}
        </GroceriesContext.Provider>
    )
}

export default GroceriesContextProvider;