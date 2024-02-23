import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LogoDark from "/src/assets/svg/logo-big-dark.svg";
import LogoWhite from "/src/assets/svg/logo-big-white.svg";

const NavLogo = ({ pathname }) => {

    const navigate = useNavigate();

    const [clickable, setClickable] = useState('');
    const [logoColor, setLogoColor] = useState(null);

    useEffect(() => {
        if (pathname === "/") {
            setLogoColor(LogoDark)
        } else {
            setLogoColor(LogoWhite)
        }
    }, [pathname]);

    useEffect(() => {
        if (pathname === "/") {
            setClickable('unClickable')
        } else {
            setClickable('clickable');
        }
    }, [pathname]);

    return (
        <>
            <img
                src={logoColor}
                className={`nav__logo--${clickable}`}
                alt="Ons logo, klik om naar Home te gaan"
                onClick={() => navigate("/personal/dashboard")}
            />
        </>
    );
};

export default NavLogo;