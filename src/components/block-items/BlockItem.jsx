import '/src/scss/components/block-items.scss';
import {addHashTag} from "../../helpers/addHashTag.js";

const BlockItem = ({ subject, blockTitle, blockSubtitle, children }) => {



    return (
        <article className="block-item__article-class">
            <span>{addHashTag(subject)}</span>
            <h2>{blockTitle}</h2>
            <h3>{blockSubtitle}</h3>

            {children}

        </article>
    );
};

export default BlockItem;