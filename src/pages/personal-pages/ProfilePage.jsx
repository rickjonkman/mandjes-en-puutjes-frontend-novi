import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import Footer from "../../components/page-sections/Footer.jsx";


const ProfilePage = () => {
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
                </Main>

                <Footer />

            </PageOuterContainer>
        </>
    );
};

export default ProfilePage;