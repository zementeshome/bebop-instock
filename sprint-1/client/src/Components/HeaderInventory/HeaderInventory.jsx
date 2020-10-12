import React from 'react';
import './HeaderInventory.scss';
import { Link } from 'react-router-dom';


function Header() {
    return(
            <header className="headerInventory">
                <div className="headerInventory__container">
                    <div className="headerInventory__container-logo">
                    <img className="headerInventory__logo" src={process.env.PUBLIC_URL + '/assets/Logo/instocklogo.svg'} alt="instock logo"/>
                </div>
                    <nav className="headerInventory__nav">
                    <ul className="headerInventory__nav-list">
                    <Link to="/" style={{textDecoration: 'none'}}><li className="headerInventory__nav-item">Warehouses</li></Link>     
                <div className="headerInventory__nav-border">
                <Link to="/inventories" style={{textDecoration: 'none'}}><li className="headerInventory__nav-item nav-item--active">Inventory</li></Link>
                    </div>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;