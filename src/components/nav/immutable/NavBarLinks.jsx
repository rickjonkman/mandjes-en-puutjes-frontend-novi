import {pagesLandingPage, pagesMain} from "../../../constants/navBarLinks.js";
import NavLinkItem from "./NavLinkItem.jsx";
import '/src/scss/components/nav--nav-bar.scss';

const NavBarLinks = ({ pathname }) => {



    return (
        <ul className="nav-unordered-list">
            {
                (pathname === '/') && pagesLandingPage.map((link) => (
                    <NavLinkItem
                        key={link.id}
                        endpoint={link.endpoint}
                        navTitle={link.navTitle}
                        listClass="link-item__landing-page"
                    />
                ))
            }
            {
                (pathname !== '/') && pagesMain.map((link) => (
                    <NavLinkItem
                        key={link.id}
                        endpoint={link.endpoint}
                        navTitle={link.navTitle}
                        listClass="link-item__main-page"
                    />
                ))
            }
        </ul>
    );
};

export default NavBarLinks;