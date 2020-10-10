import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return(
            <header className="header">
                <div className="header__container">
                    <div className="header__container-logo">
                    <Link to="/warehouses"><img className="header__logo" src={process.env.PUBLIC_URL + '/assets/Logo/instocklogo.svg'} alt="instock logo"/></Link>
                    </div>
                    <nav className="header__nav">
                    <ul className="header__nav-list">
                        <div className="header__nav-border">
                        <li className="header__nav-item header__nav-item--active">Warehouses</li>
                        </div>
                        <li className="header__nav-item">Inventory</li>
                    </ul>
                    </nav>
                </div>
            </header>
    )

}

export default Header;