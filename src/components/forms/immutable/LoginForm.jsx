import Button from "../../buttons/mutable/Button.jsx";
import InputComponent from "../mutable/InputComponent.jsx";
import {useForm} from "react-hook-form";
import LoadingPage from "../../../pages/general-pages/LoadingPage.jsx";
import ErrorPage from "../../../pages/general-pages/ErrorPage.jsx";
import {useNavigate} from "react-router-dom";
import usePost from "../../../hooks/UsePost.jsx";
import Form from "../mutable/Form.jsx";
import '/src/scss/pages/login-page.scss';

const LoginForm = () => {

    const navigate = useNavigate();
    const { sendRequest, responseData, isLoading, error } = usePost('http://localhost:8080/api/auth/authenticate');
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: '',
            password: '',
        }
    });

    async function handleFormSubmit(data) {
        const formData = {
            username: data.username,
            password: data.password,
        }
        await sendRequest(formData);
        localStorage.setItem('token', `${responseData.data.jwtToken}`);
        navigate("/user/dashboard");
    }

    if (error) {
        return <ErrorPage />
    }

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <Form formSubmit={handleSubmit(handleFormSubmit)} formTitle="Inloggen">

            <div className="login-form__input-fields">

                <section className="login-form__input-fields--field">
                    <InputComponent
                        inputClass="login-username"
                        inputLabel="Je gebruikersnaam"
                        inputName="username"
                        inputType="email"
                        register={register}
                        validationRules={{
                            validate: {
                                value: (value) => value.includes('@'),
                                message: "Gebruikersnaam moet een email zijn."
                            },
                            required: {
                                value: true,
                                message: "Gebruikersnaam is verplicht."
                            }
                        }}
                        errors={errors}
                    />
                </section>

                <section className="login-form__input-fields--field">
                    <InputComponent
                        inputClass="login-password"
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

                <Button buttonText="Inloggen" buttonType="submit" buttonClass="submit-button"/>

            </div>

        </Form>
    );
};

export default LoginForm;