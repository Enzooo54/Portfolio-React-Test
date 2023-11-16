import "./Header.css";
import React from 'react';
import Photo from "../../assets/Enzoleiller.png";

function Header() {
    return (
        <nav>
            <ul className="logo">
                <li className="logo"><img src={Photo} alt="logo"/></li>
                <li className="enzo"><a href="/">Enzo</a></li>
            </ul>
            <ul>
                <li><a href="/a-propos">à propos</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/prix">Prix</a></li>
                <li><a href="/soon">Blog</a></li>
            </ul>
            <ul>
                <li className="contact"><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        )
}

export default Header;