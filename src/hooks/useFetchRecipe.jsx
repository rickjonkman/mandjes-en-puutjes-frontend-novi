import {useState} from "react";
import axios from "axios";

const useFetchRecipe = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState({
        id: 0,
        name: '',
        servings: 0,
        prepTime: 0,
        tags: [
            {tagName: ''}
        ],
        supplies: [
            {name: ''}
        ],
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
        imageFile: '',
        createdBy: '',
    });

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            setRecipe({
                id: response.data.id,
                name: response.data.name,
                servings: response.data.servings,
                prepTime: response.data.prepTime,
                tags: response.data.tags,
                supplies: response.data.supplies,
                ingredientMeasured: response.data.measuredIngredients,
                ingredientNames: response.data.ingredientNames,
                instructions: response.data.instructions,
                imageFile: response.data.imagePath,
                createdBy: response.data.createdByUser,
            })
        } catch (e) {
            console.error(e);
            setError(e);
        }
    }


    return { sendRequest, error, isLoading, recipe }

}

export default useFetchRecipe;

