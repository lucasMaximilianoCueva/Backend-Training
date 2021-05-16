import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Nav () {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to='/' className="navbar-brand">
                Home
            </Link>
            <div>
            <Link to='/products' className="navbar-brand">
                Products
            </Link>
            <Link to='/add' className="navbar-brand">
                Add
            </Link>
            <Link to='/update' className="navbar-brand">
                Update
            </Link>
            </div>
            
        </nav>
    )
}

export default Nav;