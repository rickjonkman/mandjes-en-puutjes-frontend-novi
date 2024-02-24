import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import BlockGrid from "../../components/block-items/BlockGrid.jsx";
import BlockItem from "../../components/block-items/BlockItem.jsx";
import Button from "../../components/buttons/mutable/Button.jsx";
import Main from "../../components/page-sections/Main.jsx";
import {groceryMainItems} from "../../constants/main-page--items/groceryMainItems.js";
import Footer from "../../components/page-sections/Footer.jsx";


const GroceriesMain = () => {
    return (
        <>
            <PageOuterContainer>

                <Header>
                    <NavBar />
                </Header>

                <Main>

                    <PageTitle pageClass="groceries">
                        <h1>Boodschappen</h1>
                    </PageTitle>

                    <BlockGrid>
                        {
                            groceryMainItems.map((item) => (
                                <BlockItem
                                    key={item.id}
                                    subject={item.subject}
                                    blockTitle={item.title}
                                    blockSubtitle={item.subTitle}>
                                    <Button buttonText={item.buttonText} buttonType="button"  />
                                </BlockItem>
                            ))
                        }
                    </BlockGrid>

                </Main>

            </PageOuterContainer>

            <Footer />
        </>

    );
};

export default GroceriesMain;