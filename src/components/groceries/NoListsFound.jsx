import React, {useState} from 'react';
import Button from "../buttons/mutable/Button.jsx";
import {useNavigate} from "react-router-dom";
import InputBar from "./InputBar.jsx";
import usePost from "../../hooks/UsePost.jsx";

const NoListsFound = ({pathname}) => {

    const jwtToken = localStorage.getItem('token');

    const navigate = useNavigate();
    const { sendRequest } = usePost('http://localhost:8080/api/users/shopping-list/add-new', {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`
    })

    const [groceryInputValue, setGroceryInputValue] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await sendRequest(e);
    }

    //TODO: submithandler

    return (
        <div className="groceries__nothing-found">

            {
                pathname === '/groceries/lists' &&

                <div className="nothing-found--recent-lists">

                    <div className="nothing-found__error-section">
                        <h2>Je hebt nog geen lijsten actief...</h2>
                        <p>Je hebt nog geen opgeslagen boodschappenlijsten, ga naar je nieuwe boodschappenlijst om
                            boodschappen op te slaan.
                        </p>
                    </div>

                    <Button
                        buttonType="button"
                        buttonText="Maak een nieuwe lijst aan"
                        buttonClickHandler={() => navigate("/groceries/shopping-mode")}
                        buttonClass="nothing-found__button"
                    />

                </div>
            }
            {
                pathname === '/groceries/shopping-mode' &&
                <div className="nothing-found--current-list">

                    <h2>Maak een nieuwe boodschappenlijst aan</h2>

                    <InputBar
                        inputValue={groceryInputValue}
                        inputOnChange={(e) => setGroceryInputValue(e.target.value)}
                        notFoundInputButton={(e) => handleSubmit(e)}
                    />

                </div>
            }

        </div>
    );
};

export default NoListsFound;