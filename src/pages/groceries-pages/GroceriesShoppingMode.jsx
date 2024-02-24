import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import GroceryListContainer from "../../components/groceries/GroceryListContainer.jsx";
import '/src/scss/pages/shopping-mode-page.scss';


const GroceriesShoppingMode = () => {



    return (
        <PageOuterContainer>

            <Header>
                <NavBar />
            </Header>

            <Main>
                <PageTitle>
                    <h1>Winkelmodus</h1>
                </PageTitle>

                <div className="shopping-mode__section">
                    <GroceryListContainer />
                </div>

            </Main>

        </PageOuterContainer>
    );
};

export default GroceriesShoppingMode;