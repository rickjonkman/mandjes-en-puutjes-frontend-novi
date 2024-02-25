
import {useEffect, useState} from "react";
import RecipeThumbnail from "./RecipeThumbnail.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const AllRecipesContainer = () => {

    const navigate = useNavigate();
    const fetchAllRecipesURL = 'http://localhost:8080/api/recipes/open/get-all';
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        void fetchAllRecipes();
    }, []);

    async function fetchAllRecipes() {

        try {
            const response = await axios.get(fetchAllRecipesURL);
            setThumbnails(response.data)

        } catch (e) {
            console.error(e);
        }
    }
    console.log(thumbnails)

    return (
        <div className="all-recipes__grid">
            {
                thumbnails.map((thumbnail) => (
                    <RecipeThumbnail
                        key={thumbnail.id}
                        title={thumbnail.recipeName}
                        prepTime={thumbnail.prepTime}
                        image={thumbnail.imageFile}
                        buttonClickHandler={() => navigate(`/recipes/${thumbnail.id}`)}
                    />
                ))
            }

        </div>
    );
};

export default AllRecipesContainer;