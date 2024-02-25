import ImageWrapper from "../../image-wrapper/ImageWrapper.jsx";
import RecipePageTopSection from "./RecipePageTopSection.jsx";
import RecipeTags from "./RecipeTags.jsx";
import RecipePageShortInfo from "./RecipePageShortInfo.jsx";
import RecipePageMainSection from "./RecipePageMainSection.jsx";
import RecipePageInstructions from "./RecipePageInstructions.jsx";
import RecipePageIngredientsSection from "./RecipePageIngredientsSection.jsx";
import RecipePageSuppliesSection from "./RecipePageSuppliesSection.jsx";
import "/src/scss/pages/recipe-page.scss";


const SingleRecipeComponent = ({
                                   name,
                                   servings,
                                   prepTime,
                                   tags,
                                   image,
                                   supplies,
                                   ingredientMeasured,
                                   instructions,
                                   createdBy
                               }) => {

    const fetchRecipeImgURL = `http://localhost:8080/api/recipes/open/download-image/${image}`;

    return (
        <>

            <ImageWrapper
                imageSrc={fetchRecipeImgURL}
                imageDescription={`Een foto van het gerecht: ${name}`}
                imageWrapperId="recipe--img-wrapper"
            />

            <RecipePageMainSection>

                <div className="recipe__main-section--instructions">
                    <RecipePageInstructions recipeInstructions={instructions}/>
                </div>

                <aside className="recipe__main-section--detailed-info-right">

                    <div className="recipe-page__main-section--info">
                        <RecipePageShortInfo servings={servings} prepTime={prepTime} createdBy={createdBy}/>

                        <RecipeTags recipeTags={tags}/>

                    </div>

                    <div className="ingredients-section">
                        <h2>Ingrediënten</h2>
                        <RecipePageIngredientsSection ingredientsMeasured={ingredientMeasured}/>
                    </div>

                    <div className="supplies-section">
                        {(supplies) && <RecipePageSuppliesSection recipeSupplies={supplies}/>}
                    </div>

                </aside>

            </RecipePageMainSection>

        </>

    )
        ;
};

export default SingleRecipeComponent;