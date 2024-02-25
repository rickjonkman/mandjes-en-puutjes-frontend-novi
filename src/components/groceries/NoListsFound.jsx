import React, {useState} from 'react';
import Button from "../buttons/mutable/Button.jsx";
import {useNavigate} from "react-router-dom";
import InputBar from "./InputBar.jsx";
import usePost from "../../hooks/UsePost.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";

const NoListsFound = ({pathname}) => {

    const postUrl = 'http://localhost:8080/api/users/shopping-list/add-new';
    const {register, handleSubmit} = useForm({
        defaultValues: {
            groceries: [
                {
                    grocery: '',
                }
            ]
        }
    })

    const navigate = useNavigate();

    async function handleFormSubmit(data) {


        try {
            const response = await axios.post(postUrl, data)
            console.log(response)
        } catch (e) {
            console.error(e);
        }

    }




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

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <InputBar
                            inputName="grocery"
                            register={register}

                        />
                    </form>

                </div>
            }

        </div>
    );
};

export default NoListsFound;