import {useEffect, useState} from "react";
import {getInnerWidth} from "../../../helpers/getInnerWidth.js";
import NavBarContent from "../immutable/NavBarContent.jsx";
import HamburgerMenu from "../immutable/HamburgerMenu.jsx";
import '/src/scss/components/nav-bar.scss';

const NavBar = () => {

    const {pathname} = location;

    const [windowWith, setWindowWidth] = useState(getInnerWidth());
    const [showNavLinks, setShowNavLinks] = useState(true);
    const [showHamIcon, setShowHamIcon] = useState(false);
    const [showHamMenu, setShowHamMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getInnerWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (pathname !== '/' && windowWith < 880) {
            setShowNavLinks(false);
            setShowHamIcon(true);
        } else {
            setShowNavLinks(true);
            setShowHamIcon(false);
        }
    }, [windowWith]);

    return (
        (!showHamMenu) ?
            <NavBarContent
                pathname={pathname}
                navLinks={showNavLinks}
                hamIcon={showHamIcon}
                hamMenu={showHamMenu}
                setHamMenu={setShowHamMenu}
            />
            : <HamburgerMenu pathname={pathname} showHamMenu={showHamMenu} />

    );
};

export default NavBar;