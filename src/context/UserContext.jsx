import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../hooks/UseFetch.jsx";
import {checkExpirationJWT} from "../helpers/checkExpirationJWT.js";
import LoadingPage from "../pages/general-pages/LoadingPage.jsx";

export const UserContext = createContext({ });

const UserContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const jwtToken = localStorage.getItem('token');
    const fetchUserURL = 'http://localhost:8080/api/users/user/get';
    const headerObject = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`
    }

    const { sendRequest } = useFetch(fetchUserURL);

    const [authUser, setAuthUser] = useState({
        isAuth: false,
        status: 'pending',
        error: null,
        user: null,
    });

    const [tokenExpired, setTokenExpired] = useState(true);

    useEffect(() => {
        if (checkExpirationJWT(jwtToken)) {
            setTokenExpired(true);
            setAuthUser({
                isAuth: false,
                error: 'Token is expired.',
                user: null,
                status: 'completed',
            })
            localStorage.removeItem('token');
            navigate("/general/login");
        } else {
            setTokenExpired(false);
        }
    }, [jwtToken]);

    useEffect(() => {
        if (!tokenExpired) {
            void fetchUser();
        } else {
            localStorage.removeItem('token');
            setAuthUser({
                isAuth: false,
                error: 'Token expired',
                user: null,
                status: 'completed',
            })
            navigate("/general/login");
        }
    }, [tokenExpired]);

    async function fetchUser() {

        const userResponse = await sendRequest(headerObject);
        setAuthUser({
            setAuth: true,
            user: {
                userId: userResponse.data.userId,
                username: userResponse.data.username,
                firstname: userResponse.data.firstname,
                enabled: userResponse.data.enabled,
                authorities: userResponse.data.authorities,
                meat: userResponse.data.showMeat,
                fish: userResponse.data.showFish,
                vegetarian: userResponse.data.showVegetarian,
                vegan: userResponse.data.showVegan,
            },
            status: 'completed',
        })
    }


    const userObject = {
        authUser,
    }

    return (
        <UserContext.Provider value={userObject}>
            {authUser.status === 'completed' ? children : <LoadingPage /> }
        </UserContext.Provider>
    )
}

export default UserContextProvider;