import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Header from "../../components/page-sections/Header.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import BlockItem from "../../components/block-items/BlockItem.jsx";
import BlockGrid from "../../components/block-items/BlockGrid.jsx";
import {recipeMainItems} from "../../constants/main-page--items/recipeMainItems.js";
import Footer from "../../components/page-sections/Footer.jsx";


const RecipesMain = () => {



    return (
        <>
            <PageOuterContainer>

                <Header>
                    <NavBar />
                </Header>

                <Main>

                    <PageTitle pageClass="recipes-main">
                        <h1>Recepten</h1>
                    </PageTitle>

                    <BlockGrid>
                        {
                            recipeMainItems.map((item) => (
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

export default RecipesMain;