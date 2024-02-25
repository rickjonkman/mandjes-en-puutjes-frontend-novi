import usePost from "../../hooks/UsePost.jsx";
import {useForm} from "react-hook-form";
import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import NewRecipeForm from "../../components/forms/immutable/NewRecipeForm.jsx";


const RecipeNew = () => {

    return (
        <PageOuterContainer>

            <Header>
                <NavBar />
            </Header>

            <Main>

                <PageTitle>
                    <h1>Nieuw recept</h1>
                </PageTitle>

                <div className="new-recipe__form-section">
                    <NewRecipeForm />
                </div>

            </Main>

        </PageOuterContainer>
    );
};

export default RecipeNew;