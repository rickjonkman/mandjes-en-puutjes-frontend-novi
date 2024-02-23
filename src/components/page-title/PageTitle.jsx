import React from 'react';

const PageTitle = ({ pageClass, children }) => {



    return (
        <div className={`${pageClass}--title`}>
            {children}
        </div>
    );
};

export default PageTitle;