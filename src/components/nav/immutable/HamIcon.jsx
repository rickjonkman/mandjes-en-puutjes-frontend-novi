
const HamIcon = ({ hamClickHandler, hamOpen }) => {



    return (
        <button type="button" className="nav-bar__ham-button" onClick={hamClickHandler}>
            <div className={hamOpen ? 'ham-container--open' : 'ham-container--closed'}>
                <div className={hamOpen ? 'hamburger-icon--open' : 'hamburger-icon--closed'}>

                </div>
            </div>
        </button>
    );
};

export default HamIcon;