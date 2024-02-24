import {checkPathname} from "../../../helpers/checkPathname.js";
import NavLinksHamburger from "./NavLinksHamburger.jsx";
import NavLogo from "./NavLogo.jsx";
import HamIcon from "./HamIcon.jsx";
import '/src/scss/components/nav--nav-bar.scss';

const HamburgerMenu = ({ pathname, setShowHamMenu, showHamMenu }) => {



    return (
        <nav className={`nav-bar__ham-open`}>

            <div className="ham-open__top-section">
                <div className={`nav-bar__${checkPathname(pathname)}--logo`}>
                    <NavLogo pathname={pathname}/>
                </div>

                <HamIcon
                    hamOpen={showHamMenu}
                    hamClickHandler={() => setShowHamMenu(!showHamMenu)}
                />
            </div>

            <div className="ham-open__nav-links">
                {
                    showHamMenu &&
                    <NavLinksHamburger pathname={pathname} hamOpen={showHamMenu}/>
                }

            </div>

        </nav>
    );
};

export default HamburgerMenu;