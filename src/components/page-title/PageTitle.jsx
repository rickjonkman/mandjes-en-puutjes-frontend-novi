import React from 'react';
import '/src/scss/components/page-section.scss';

const PageTitle = ({ pageClass, children }) => {



    return (
        <div className={`${pageClass}--title page-title--class`}>
            {children}
        </div>
    );
};

export default PageTitle;