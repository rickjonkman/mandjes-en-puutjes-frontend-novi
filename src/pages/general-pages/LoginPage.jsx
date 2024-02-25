import {useNavigate} from "react-router-dom";
import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Main from "../../components/page-sections/Main.jsx";
import ButtonTransitionEffect from "../../components/buttons/immutable/ButtonTransitionEffect.jsx";
import LoginForm from "../../components/forms/immutable/LoginForm.jsx";

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <div className="page-BG">
            <PageOuterContainer>

                <Main>

                    <div className="go-back">
                        <ButtonTransitionEffect buttonClickHandler={() => navigate("/")}/>
                    </div>

                    <div className="main__login-form">
                        <LoginForm/>
                    </div>

                </Main>

            </PageOuterContainer>
        </div>
    );
};

export default LoginPage;