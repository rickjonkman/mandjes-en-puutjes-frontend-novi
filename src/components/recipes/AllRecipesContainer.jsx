import useFetch from "../../hooks/UseFetch.jsx";
import {useContext, useEffect, useState} from "react";
import {GroceriesContext} from "../../context/GroceriesContext.jsx";
import RecipeThumbnail from "./RecipeThumbnail.jsx";


const AllRecipesContainer = () => {

    const { sendRequest } = useFetch();
    const { headerObject } = useContext(GroceriesContext);

    const [recipeThumbnails, setRecipeThumbnails] = useState([
        {
            id: 0,
            recipeName: '',
            servings: 0,
            prepTime: 0,
            tags: [],
        }
    ]);

    useEffect(() => {
        async function fetchRecipeThumbnails() {
            const response = await sendRequest(headerObject);
            response.data.map((field) => {
                setRecipeThumbnails({
                    id: field.id,
                    recipeName: field.recipeName,
                    servings: field.servings,
                    prepTime: field.prepTime,
                    tags: field.tags,
                })
            })
        }
    }, []);


    return (
        <div className="all-recipes__grid">
            {
                recipeThumbnails.map((recipe) => (
                    <RecipeThumbnail key={recipe.id} title={recipe.recipeName} tags={recipe.tags} />
                ))
            }
        </div>
    );
};

export default AllRecipesContainer;