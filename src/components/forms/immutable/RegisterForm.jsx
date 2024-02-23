import InputCheckComponent from "./InputCheckComponent.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBacon, faEgg, faFish, faSeedling} from "@fortawesome/free-solid-svg-icons";
import Button from "../../buttons/mutable/Button.jsx";
import InputComponent from "../mutable/InputComponent.jsx";
import LoadingPage from "../../../pages/general-pages/LoadingPage.jsx";
import ErrorPage from "../../../pages/general-pages/ErrorPage.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import usePost from "../../../hooks/UsePost.jsx";
import Form from "../mutable/Form.jsx";


const RegisterForm = () => {

    const navigate = useNavigate();

    const { sendRequest, responseData, isLoading, error } = usePost('http://localhost:8080/api/users/register');
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: '',
            password: '',
            firstname: '',
            meat: true,
            fish: true,
            vegetarian: true,
            vegan: true,
            enabled: true,
        }
    });

    async function handleFormSubmit(data) {
        const formData = {
            username: data.username,
            password: data.password,
            firstname: data.firstname,
            showMeat: data.meat,
            showFish: data.fish,
            showVegetarian: data.vegetarian,
            showVegan: data.vegan,
            enabled: true,
        }
        await sendRequest(formData);
        localStorage.setItem('userId', responseData.data.userId);
        navigate("/general/login");
    }

    if (error) {
        return <ErrorPage />
    }

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <Form formSubmit={handleSubmit(handleFormSubmit)} formTitle="Registreren">

            <div className="register-login-form__input-fields">

                <section className="register-login-form__input-fields--field">
                    <InputComponent
                        inputClass="register-username"
                        inputLabel="Kies een gebruikersnaam"
                        inputName="username"
                        inputType="email"
                        register={register}
                        validationRules={{
                            required: {
                                value: true,
                                message: "Gebruikersnaam is verplicht."
                            }
                        }}
                        errors={errors}
                    />
                </section>

                <section className="register-login-form__input-fields--field">
                    <InputComponent
                        inputClass="register-password"
                        inputLabel="Je wachtwoord"
                        inputType="password"
                        inputName="password"
                        register={register}
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Wachtwoord is verplicht.'
                            }
                        }}
                        errors={errors}
                    />
                </section>

                <section className="register-login-form__input-fields--field">
                    <InputComponent
                        inputClass="register-firstname"
                        inputName="firstname"
                        inputType="text"
                        inputLabel="Je voornaam"
                        register={register}
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Voornaam is verplicht.'
                            }
                        }}
                        errors={errors}
                    />
                </section>

                <section className="register-login-form__input-fields--field">
                    <fieldset>
                        <legend>Voorkeuren:</legend>

                        <InputCheckComponent
                            inputLabel="Vlees"
                            inputName="meat"
                            inputClass="prefs"
                            inputValue="Vlees"
                            register={register}
                            errors={errors}>
                            <FontAwesomeIcon className="form-icon" icon={faBacon} />
                        </InputCheckComponent>

                        <InputCheckComponent
                            inputLabel="Vis"
                            inputName="fish"
                            inputClass="prefs"
                            inputValue="Vis"
                            register={register}
                            errors={errors}>
                            <FontAwesomeIcon className="form-icon" icon={faFish} />
                        </InputCheckComponent>

                        <InputCheckComponent
                            inputLabel="Vegetarisch"
                            inputName="vegetarian"
                            inputClass="prefs"
                            inputValue="Vegetarisch"
                            register={register}
                            errors={errors}>
                            <FontAwesomeIcon className="form-icon" icon={faEgg} />
                        </InputCheckComponent>

                        <InputCheckComponent
                            inputLabel="Vegan"
                            inputName="vegan"
                            inputClass="prefs"
                            inputValue="Vegan"
                            register={register}
                            errors={errors}>
                            <FontAwesomeIcon className="form-icon" icon={faSeedling} />
                        </InputCheckComponent>

                    </fieldset>
                </section>

                <Button buttonText="Registreer" buttonClass="submit-button" buttonType="submit" />

            </div>

        </Form>
    );
};

export default RegisterForm;