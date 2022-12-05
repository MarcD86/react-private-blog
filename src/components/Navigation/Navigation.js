import React from 'react';
import './Navigation.css';
import {NavLink, useNavigate} from "react-router-dom";

const Navigation = ({isAuthenticated, toggleIsAuthenticated}) => {

    const navigate = useNavigate();

    function handleLogout() {
        toggleIsAuthenticated(false)
        navigate("/")
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                    </li>
                    {isAuthenticated && <li>
                        <NavLink to="/blogoverview"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blog-overview</NavLink>
                    </li>}
                    {!isAuthenticated && <li>
                        <NavLink to="/login"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Login</NavLink>
                    </li>}
                </ul>
                <div>
                    {isAuthenticated &&
                        <button type="button" id="logout" onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;