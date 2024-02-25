import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {checkExpirationJWT} from "../helpers/checkExpirationJWT.js";
import LoadingPage from "../pages/general-pages/LoadingPage.jsx";
import axios from "axios";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const navigate = useNavigate();
    const jwtToken = localStorage.getItem('token');
    const fetchUserURL = 'http://localhost:8080/api/users/user/get-user';

    const [authUser, setAuthUser] = useState({
        isAuth: false,
        status: 'pending',
        error: null,
        user: {
            userId: 0,
            username: '',
            firstname: '',
            enabled: false,
            authorities: [''],
            meat: true,
            fish: true,
            vegetarian: true,
            vegan: true,
        },
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {

            checkExpirationJWT();

            if (checkExpirationJWT()) {
                void fetchUser();
            }
        } else {
            navigate("/general/login");
            setAuthUser({
                ...authUser,
                status: 'completed'
            })
        }
    }, []);

    async function fetchUser() {

        try {
            const response = await axios.get(fetchUserURL, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                }
            });
            setAuthUser({
                isAuth: true,
                user: {
                    username: response.data.username,
                    firstname: response.data.firstname,
                    enabled: response.data.enabled,
                    authorities: response.data.authorities,
                    meat: response.data.showMeat,
                    fish: response.data.showFish,
                    vegetarian: response.data.showVegetarian,
                    vegan: response.data.showVegan,
                },
                status: 'completed',
            })
        } catch (e) {
            console.error(e);
        }
    }


    const userObject = {
        authUser,
        setAuthUser,
    }


    return (
        <UserContext.Provider value={userObject}>
            {authUser.status === 'completed' ? children : <LoadingPage/>}
        </UserContext.Provider>
    )
}

export default UserContextProvider;