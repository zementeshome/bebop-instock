// import React from './node_modules/react';
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return(
            <header className="header">
                <div className="header__container">
                    <div className="header__container-logo">
                    <Link to="/" style={{textDecoration: 'none'}}><img className="header__logo" src={process.env.PUBLIC_URL + '/assets/Logo/instocklogo.svg'} alt="instock logo"/></Link>
                    </div>
                    <nav className="header__nav">
                    <ul className="header__nav-list">
                        <div className="header__nav-border">
                        <Link to="/" style={{textDecoration: 'none'}}><li className="header__nav-item header__nav-item--active">Warehouses</li></Link>
                        </div>
                        <Link to="/inventories" style={{textDecoration: 'none'}}><li className="header__nav-item">Inventory</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;