import {useNavigate} from "react-router-dom";
import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Main from "../../components/page-sections/Main.jsx";
import ButtonTransitionEffect from "../../components/buttons/immutable/ButtonTransitionEffect.jsx";
import RegisterForm from "../../components/forms/immutable/RegisterForm.jsx";
import '/src/scss/pages/register-page.scss';

const RegisterPage = () => {

    const navigate = useNavigate();

    return (
        <PageOuterContainer>

            <Main>

                <div className="go-back">
                    <ButtonTransitionEffect buttonClickHandler={() => navigate("/")}/>
                </div>

                <div className="main__register-form">
                    <RegisterForm/>
                </div>

            </Main>

        </PageOuterContainer>
    );
};

export default RegisterPage;