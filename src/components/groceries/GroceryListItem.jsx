import React from 'react';

const GroceryListItem = ({ grocery, children }) => {
    return (
        <li>
            <h4>{grocery}</h4>
            <div className="grocery-list__item--icon-section">
                { children }
            </div>
        </li>
    );
};

export default GroceryListItem;