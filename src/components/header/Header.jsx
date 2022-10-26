import React from 'react';
import './Header'
import Navigation from '../navigation/Navigation'
import Logo from '../logo/Logo'
import './Header.css'

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <Navigation/>
                </div>
            </div>
    </header>
    );
}

export default Header;