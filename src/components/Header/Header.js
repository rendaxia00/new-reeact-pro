import React from 'react';
import Logo from '../Logo';
import Link from '../Link';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <div className="header__link">
                <Link text="Return to the main SONM website" />
            </div>
        </header>
    )
};

export default Header;