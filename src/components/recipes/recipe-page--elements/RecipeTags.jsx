import React from 'react';

const RecipeTags = ({ recipeTags }) => {



    return (
        <ul className="recipe-page__tags">
            {
                recipeTags.map((tag, index) => (
                    <li key={index}>
                        <p>{tag.tagName}</p>
                    </li>
                ))
            }
        </ul>
    );
};

export default RecipeTags;