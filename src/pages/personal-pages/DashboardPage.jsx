import Header from "../../components/page-sections/Header.jsx";
import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import '/src/scss/pages/dashboard-page.scss';
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import BlockGrid from "../../components/block-items/BlockGrid.jsx";
import BlockItem from "../../components/block-items/BlockItem.jsx";
import Button from "../../components/buttons/mutable/Button.jsx";
import {dashboardItems} from "../../constants/main-page--items/dashboardItems.js";
import Footer from "../../components/page-sections/Footer.jsx";


const DashboardPage = () => {
    return (
        <>
            <PageOuterContainer>
                <Header>
                    <NavBar />
                </Header>

                <Main>

                    <PageTitle pageClass="dashboard">
                        <h1>Dashboard</h1>
                    </PageTitle>

                    <BlockGrid>
                        {
                            dashboardItems.map((item) => (
                                <BlockItem
                                    key={item.id}
                                    subject={item.subject}
                                    blockTitle={item.title}
                                    blockSubtitle={item.subTitle}
                                    buttonText={item.buttonText}
                                />

                            ))
                        }
                    </BlockGrid>

                </Main>
            </PageOuterContainer>

            <Footer />
        </>

    );
};

export default DashboardPage;