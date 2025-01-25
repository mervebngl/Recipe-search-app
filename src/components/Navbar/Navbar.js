import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/userContext'; 
import './styles.css';

const Navbar = () => {
    const { user, logout } = useUser(); 

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/recipes/categories">Categories</Link>
            {user ? (
                <>
                    <Link to="/recipes/create">Create New Recipe</Link>
                    <Link to="/user/settings">User Settings</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;