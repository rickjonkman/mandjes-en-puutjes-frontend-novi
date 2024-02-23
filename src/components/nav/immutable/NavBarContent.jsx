import {checkPathname} from "../../../helpers/checkPathname.js";
import NavLogo from "./NavLogo.jsx";
import NavBarLinks from "./NavBarLinks.jsx";
import HamIcon from "./HamIcon.jsx";
import '/src/scss/components/nav-bar.scss';

const NavBarContent = ({pathname, navLinks, hamIcon, setHamMenu, hamMenu}) => {


    return (
        <nav className={`nav-bar__${checkPathname(pathname)}`}>
            <div className="transition-effect"></div>

            <div className="nav-bar__links-section">
                <div className={`nav-bar__${checkPathname(pathname)}--logo`}>
                    <NavLogo pathname={pathname}/>
                </div>
                <div className={`nav-bar__${checkPathname(pathname)}--links`}>
                    {
                        navLinks &&

                        <NavBarLinks pathname={pathname}/>

                    }
                </div>
            </div>


            <div className="nav-bar__icons-section">
                {
                    hamIcon &&
                    <HamIcon hamClickHandler={() => setHamMenu(!hamMenu)}/>
                }


                {
                    pathname !== "/" && <div className={`nav-bar__${checkPathname(pathname)}--user-avatar`}>
                        {/*<NavAvatar />*/}
                    </div>
                }
            </div>
        </nav>
    );
};

export default NavBarContent;