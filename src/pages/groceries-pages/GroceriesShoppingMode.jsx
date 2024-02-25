import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import '/src/scss/pages/shopping-mode-page.scss';
import CurrentGroceryListContainer from "../../components/groceries/CurrentGroceryListContainer.jsx";
import {useContext, useEffect} from "react";
import {GroceriesContext} from "../../context/GroceriesContext.jsx";
import axios from "axios";


const GroceriesShoppingMode = () => {

    const { currentShoppingList } = useContext(GroceriesContext);


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
                    <CurrentGroceryListContainer currentShoppingList={currentShoppingList} />
                </div>

            </Main>

        </PageOuterContainer>
    );
};

export default GroceriesShoppingMode;