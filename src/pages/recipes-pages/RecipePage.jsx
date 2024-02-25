import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import {useParams} from "react-router-dom";
import SingleRecipeComponent from "../../components/recipes/recipe-page--elements/SingleRecipeComponent.jsx";
import {useEffect, useState} from "react";
import useFetchRecipe from "../../hooks/useFetchRecipe.jsx";
import Footer from "../../components/page-sections/Footer.jsx";


const RecipePage = () => {

    const {recipeId} = useParams();
    const fetchRecipeURL = `http://localhost:8080/api/recipes/open/${recipeId}/get`;
    const {sendRequest, recipe} = useFetchRecipe(fetchRecipeURL);


    useEffect(() => {
        void sendRequest(fetchRecipeURL);
    }, []);

    console.log(recipe)

    const { imageFile } = recipe;
    const {
        name,
        servings,
        prepTime,
        tags,
        supplies,
        ingredientMeasured,
        ingredientNames,
        instructions,
        createdBy
    } = recipe;


    return (
        <>

            <PageOuterContainer>

                <Header>
                    <NavBar/>
                </Header>

                <Main>
                    <PageTitle>
                        <h1>{name}</h1>
                    </PageTitle>

                    <SingleRecipeComponent
                        name={name}
                        servings={servings}
                        prepTime={prepTime}
                        tags={tags}
                        supplies={supplies}
                        ingredientMeasured={ingredientMeasured}
                        ingredientNames={ingredientNames}
                        instructions={instructions}
                        image={imageFile}
                        createdBy={createdBy}
                    />

                </Main>

            </PageOuterContainer>

            <Footer/>
        </>
    );
};

export default RecipePage;