

const RecipePageShortInfo = ({ servings, prepTime, createdBy }) => {



    return (
        <article className="recipe-page__short-info">
            <span><p>Aantal personen</p><h3>{servings}</h3></span>
            <span><p>Bereidingstijd</p><h3>{prepTime}</h3></span>
            <span><p>Toegevoegd door: </p><h3>{createdBy}</h3></span>
        </article>
    );
};

export default RecipePageShortInfo;