import React from 'react';

const RecipePageIngredientsSection = ({ingredientsMeasured}) => {


    return (
        <ul>
            {
                ingredientsMeasured.map((item, index) => (
                    <li key={index}>
                        <div className="list-item--spacing">
                        <span id="item-amount">
                            <p>{item.amount}</p>
                        </span>

                            <span id="item-unit">
                            <p>{item.unit}</p>
                        </span>

                            <span id="item-name">
                            <p>{item.name}</p>
                        </span>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default RecipePageIngredientsSection;