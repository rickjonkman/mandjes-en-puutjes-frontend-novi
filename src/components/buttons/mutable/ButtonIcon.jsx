import React from 'react';

const ButtonIcon = ({ buttonClickHandler, children }) => {
    return (
        <button type="button" className="button--icon" onClick={buttonClickHandler}>
            {children}
        </button>
    );
};

export default ButtonIcon;