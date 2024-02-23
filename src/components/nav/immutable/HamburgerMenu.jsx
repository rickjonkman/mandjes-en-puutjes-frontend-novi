import {checkPathname} from "../../../helpers/checkPathname.js";
import NavLinksHamburger from "./NavLinksHamburger.jsx";
import NavLogo from "./NavLogo.jsx";

const HamburgerMenu = ({ pathname, showHamMenu }) => {



    return (
        <nav className={`nav-bar__ham-open`}>

            <div className="ham-open__top-section">
                <div className={`nav-bar__${checkPathname(pathname)}--logo`}>
                    <NavLogo pathname={pathname}/>
                </div>

                {/*<HamIcon*/}
                {/*    hamClickHandler={() => setShowHamMenu(!showHamMenu)}*/}
                {/*    hamOpen={showHamMenu}*/}
                {/*/>*/}
            </div>

            <div className="ham-open__nav-links">
                {
                    showHamMenu &&
                    <NavLinksHamburger pathname={pathname} hamOpen={showHamMenu}/>
                }

            </div>
            <div className="transition-effect"></div>


        </nav>
    );
};

export default HamburgerMenu;