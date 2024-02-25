import React from 'react';
import "/src/scss/components/image-wrapper.scss";

const ImageWrapper = ({ imageSrc, imageDescription, imageWrapperId }) => {
    return (
        <div className={imageWrapperId}>

            <img
                src={imageSrc}
                alt={imageDescription}
                className="image-wrapper__image--class"
            />

        </div>
    );
};

export default ImageWrapper;