import React from 'react';
import './HeaderInventory.scss';

function Header() {
    return(
            <header className="headerInventory">
                <div className="headerInventory__container">
                    <div className="headerInventory__container-logo">
                    <img className="headerInventory__logo" src={process.env.PUBLIC_URL + '/assets/Logo/instocklogo.svg'} alt="instock logo"/>
                </div>
                    <nav className="headerInventory__nav">
                    <ul className="headerInventory__nav-list">
                        <li className="headerInventory__nav-item">Warehouses</li>
                     <div className="headerInventory__nav-border">
                        <li className="headerInventory__nav-item nav-item--active">Inventory</li>
                    </div>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;