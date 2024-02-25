import React from 'react';

const RecipePageInstructions = ({recipeInstructions}) => {


    return (

        <ul>
            {
                recipeInstructions.map((instruction) => (
                    <li key={instruction.step}>
                        <h3>{instruction.step}</h3>
                        <p>{instruction.instruction}</p>
                    </li>
                ))
            }
        </ul>
    );
};

export default RecipePageInstructions;