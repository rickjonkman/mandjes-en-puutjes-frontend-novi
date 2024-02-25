import {useNavigate} from "react-router-dom";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import Button from "../../components/buttons/mutable/Button.jsx";
import '/src/scss/pages/landing-page.scss';
import '/src/scss/global/page-sections.scss';
import LandingPageOuterContainer from "../../components/page-sections/LandingPageOuterContainer.jsx";

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <LandingPageOuterContainer>
            <Header>
                <NavBar />
            </Header>

            <Main>

                <div className="hero">

                    <section className="hero--title-section">

                        <h2>De webapplicatie voor je: </h2>
                        <span>boodschappen en recepten </span>

                        <h1>Alles in 1</h1>

                    </section>

                    <Button
                        buttonText="Registreer je nu"
                        buttonClass="cta-button"
                        buttonType="button"
                        buttonClickHandler={() => navigate("/register")}
                    />

                </div>



            </Main>

        </LandingPageOuterContainer>
    );
};

export default LandingPage;