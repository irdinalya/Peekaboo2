import React from 'react';
import './Header.css';
import axios from 'axios';

function Header({ onCategoryChange, navigateToPage, user, onLogout, onSearch }) {
    return (
        <header className="App-header">
            <div className="logo" onClick={() => navigateToPage('home')}>
                <img src="/images/logo.jpg" alt="Peekaboo Toy Shop Logo" className="logo-image" />
            </div>

            <div className="header-buttons">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    onChange={(e) => onSearch(e.target.value)}
                />
                <button onClick={() => navigateToPage('products')}>Categories</button>
                <button onClick={() => navigateToPage('wishlist')}>Wishlist</button>
                <button onClick={() => navigateToPage('cart')}>Cart</button>

                {!user ? (
                    <>
                        <button onClick={() => navigateToPage('login')}>Login</button>
                        <button onClick={() => navigateToPage('signup')}>Sign Up</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigateToPage('account')}>Account</button>
                        <button onClick={onLogout}>Logout</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
