import {NavLink} from "react-router-dom";

const NavLinkItem = ({endpoint, navTitle, listClass}) => {
    return (
        <li className={listClass}>
            <NavLink
                to={endpoint}
                className={({isActive}) =>
                    (isActive ? 'active' : 'inactive')}>
                {navTitle}
            </NavLink>
        </li>
    );
};

export default NavLinkItem;