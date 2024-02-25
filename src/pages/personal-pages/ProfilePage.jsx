import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import Footer from "../../components/page-sections/Footer.jsx";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext.jsx";
import Button from "../../components/buttons/mutable/Button.jsx";
import '/src/scss/pages/profile-page.scss';


const ProfilePage = () => {

    const { setAuthUser, authUser } = useContext(UserContext);

    function logOut() {

        setAuthUser({
            isAuth: false,
            user: null,
            status: 'completed'
        })
        localStorage.removeItem('token');
    }

    return (
        <>
            <PageOuterContainer>

                <Header>
                    <NavBar />
                </Header>

                <Main>
                    <PageTitle>
                        <h1>Profiel</h1>
                    </PageTitle>

                    <section className="profile-page__harmonica--user-info">
                        <h2>Gebruikersinformatie</h2>
                        <div className="harmonica--data">

                            <div className="data--field">
                                <h4>Gebruikersnaam:</h4><p>{authUser.user.username}</p>
                            </div>

                            <div className="data--field">
                                <h4>Voornaam:</h4><p>{authUser.user.firstname}</p>
                            </div>

                            <div className="data--field">
                                <h4>Rechten:</h4><p>{authUser.user.authorities}</p>
                            </div>

                        </div>
                    </section>

                    <section className="profile-page__harmonica--preferences">
                        <h2>Voorkeuren</h2>
                        <div className="harmonica--data">

                            <div className="data--field">
                                <h4>Vleesgerechten:</h4><p>{`${authUser.user.meat}`}</p>
                            </div>

                            <div className="data--field">
                                <h4>Visgerechten:</h4><p>{`${authUser.user.fish}`}</p>
                            </div>

                            <div className="data--field">
                                <h4>Vegetarische gerechten:</h4><p>{`${authUser.user.vegetarian}`}</p>
                            </div>

                            <div className="data--field">
                                <h4>Vegan gerechten:</h4><p>{`${authUser.user.vegan}`}</p>
                            </div>

                        </div>
                    </section>

                    <Button
                        buttonText="Log out"
                        buttonType="button"
                        buttonClickHandler={() => logOut}
                    />

                </Main>

                <Footer/>

            </PageOuterContainer>
        </>
    );
};

export default ProfilePage;