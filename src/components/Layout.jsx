import React from 'react';
import {Outlet} from 'react-router-dom';
import {Link} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link> |
                <Link to="/info">Info</Link> |
                <Link to="/about">About</Link>
            </div>

            <div>
                <Outlet/>
            </div>

            <div>&copy; 2023</div>
        </div>
    );
};

export default Layout;