import Header from "../../components/page-sections/Header.jsx";
import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import '/src/scss/pages/dashboard-page.scss';
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";


const DashboardPage = () => {
    return (
        <PageOuterContainer>
            <Header>
                <NavBar />
            </Header>

            <Main>

                <PageTitle pageClass="dashboard">
                    <h1>Dashboard</h1>
                </PageTitle>

            </Main>
        </PageOuterContainer>
    );
};

export default DashboardPage;