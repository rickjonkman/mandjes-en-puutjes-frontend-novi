import '/src/scss/components/block-items.scss';

const BlockGrid = ({ children }) => {



    return (
        <section className="block-section__grid">
            {children}
        </section>
    );
};

export default BlockGrid;