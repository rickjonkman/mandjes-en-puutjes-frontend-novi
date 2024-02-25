import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import AllRecipesContainer from "../../components/recipes/AllRecipesContainer.jsx";
import '/src/scss/pages/all-recipes-page.scss';


const RecipesAll = () => {
    return (
        <PageOuterContainer>

            <Header>
                <NavBar />
            </Header>

            <Main>
                <PageTitle>
                    <h1>Alle recepten</h1>
                </PageTitle>

                <div className="all-recipes__thumbnails">
                    <AllRecipesContainer />
                </div>

            </Main>

        </PageOuterContainer>
    );
};

export default RecipesAll;