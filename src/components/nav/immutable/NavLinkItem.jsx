import {NavLink} from "react-router-dom";

const NavLinkItem = ({ endpoint, navTitle, listClass }) => {
    return (
        <li className={listClass}>
            <NavLink to={endpoint}>{navTitle}</NavLink>
        </li>
    );
};

export default NavLinkItem;