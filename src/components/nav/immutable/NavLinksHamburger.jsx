import NavLinkItem from "./NavLinkItem.jsx";
import {pagesHamOpen} from "../../../constants/navLinksHamMenu.js";

const NavLinksHamburger = ({ pathname, hamOpen }) => {
    return (
        <ul className="nav-unordered-list">
            {
                (pathname !== '/' && hamOpen === true) &&
                pagesHamOpen.map((link) => (
                        <NavLinkItem
                            key={link.id}
                            endpoint={link.endpoint}
                            navTitle={link.navTitle}
                            listClass={link.main ? 'list-item--main' : 'list-item--page'}
                        />
                    )
                )
            }
        </ul>
    );
};

export default NavLinksHamburger;