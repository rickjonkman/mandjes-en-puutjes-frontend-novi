import React from 'react';

const RecipePageSuppliesSection = ({recipeSupplies}) => {

    return (
        <div className="supplies-section">
            <h2>Benodigdheden</h2>
            <ul>
                {
                    recipeSupplies.map((item, index) => (
                        <li key={index}>
                            <p>{item.item}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default RecipePageSuppliesSection;