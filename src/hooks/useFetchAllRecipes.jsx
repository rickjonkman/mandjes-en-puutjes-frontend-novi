import {useState} from "react";
import axios from "axios";


const useFetchAllRecipes = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [thumbnails, setThumbnails] = useState([
        {
            id: 0,
            recipeName: '',
            prepTime: 0,
            tags: [],
            imageUrl: '',
        }
    ])

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            console.log(response)
            setThumbnails([
                ...thumbnails, {
                    id: response.data.id,
                    recipeName: response.data.name,
                    prepTime: response.data.prepTime,
                    tags: response.data.tags,
                    imageUrl: response.data.imageUrl,
                }])

        } catch (e) {
            console.error(e);
            setError(e);
        }

    }

    console.log(thumbnails)

    return {sendRequest, error, isLoading, thumbnails}
}

export default useFetchAllRecipes;