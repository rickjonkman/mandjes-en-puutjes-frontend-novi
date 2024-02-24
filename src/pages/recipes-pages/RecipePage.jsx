import PageOuterContainer from "../../components/page-sections/PageOuterContainer.jsx";
import Header from "../../components/page-sections/Header.jsx";
import NavBar from "../../components/nav/mutable/NavBar.jsx";
import Main from "../../components/page-sections/Main.jsx";
import PageTitle from "../../components/page-title/PageTitle.jsx";
import useFetch from "../../hooks/UseFetch.jsx";
import {useState} from "react";


const RecipePage = () => {

    const { sendRequest, responseData, error, isLoading } = useFetch('');

    const [recipe, setRecipe] = useState({
        id: 0,
        name: '',
        servings: 0,
        prepTime: 0,
        tags: [
            {tagName: ''}
        ],
        supplies: [],
        ingredientMeasured: [
            {
                amount: 0,
                unit: '',
                name: '',
            }
        ],
        ingredientNames: [
            { name: '' }
        ],
        instructions: [
            {
                step: 0,
                instruction: '',
            }
        ],
        createdBy: '',
    });

    const [recipeImg, setRecipeImg] = useState({

    })

    async function fetchRecipe() {
        const response = await sendRequest();
        setRecipe({

        })
    }

    return (
        <PageOuterContainer>

            <Header>
                <NavBar />
            </Header>

            <Main>
                <PageTitle>
                    <h1>Recipe Name</h1>
                </PageTitle>

                <div className="recipe__top-section">

                    <div className="image-wrapper">
                        <img
                            src=""
                            alt=""
                        />
                    </div>

                    <div className="top-section__top-recipe-info">

                        <div className="top-section__tags">

                        </div>

                        <div className="top-section__info">

                        </div>

                    </div>

                </div>

                <div className="recipe__main-section">

                    <div className="recipe__main-section--instructions">

                    </div>

                    <div className="recipe__main-section--detailed-info-right">

                        <div className="save-button--section">

                        </div>

                        <div className="ingredients-section">

                        </div>

                        <div className="supplies-section">

                        </div>

                    </div>

                </div>

            </Main>

        </PageOuterContainer>
    );
};

export default RecipePage;