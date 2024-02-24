

const RecipeThumbnail = ({ title, tags }) => {



    return (
        <article className="recipe-thumbnail__container">

            <h2>{title}</h2>

            <div className="recipe-thumbnail__container--tags-container">
                {tags}
            </div>

        </article>
    );
};

export default RecipeThumbnail;