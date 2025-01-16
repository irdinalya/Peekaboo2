import React, { useState } from 'react';
import './Header.css';

function Header({ onCategoryChange, navigateToPage, user, onAuth, onLogout }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const categories = ['All', 'Barbie', 'Hot Wheels', 'Lego', 'Toy Stuff'];

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        setDropdownVisible(false);
        navigateToPage('products');
    };

    const openAuthModal = (mode) => {
        setAuthMode(mode);
        setIsAuthModalVisible(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalVisible(false);
    };

    return (
        <header className="App-header">
            <h1 onClick={() => navigateToPage('home')}>Peekaboo Toy Shop</h1>
            <div className="header-buttons">
                <div className="dropdown">
                    <button className="header-btn" onClick={toggleDropdown}>Categories</button>
                    {dropdownVisible && (
                        <ul className="dropdown-menu">
                            {categories.map((category) => (
                                <li key={category} onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {user ? (
                    <>
                        <button className="header-btn" onClick={() => navigateToPage('account')}>My Account</button>
                        <button className="header-btn" onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className="header-btn" onClick={() => openAuthModal('login')}>Login</button>
                        <button className="header-btn" onClick={() => openAuthModal('signup')}>Sign Up</button>
                    </>
                )}
                <button className="header-btn" onClick={() => navigateToPage('cart')}>Cart</button>
            </div>

            {isAuthModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{authMode === 'login' ? 'Login' : 'Sign Up'}</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const username = e.target.username.value;
                            const email = e.target.email?.value || null;
                            closeAuthModal();
                            onAuth(username, email);
                        }}>
                            <input type="text" name="username" placeholder="Username" required />
                            {authMode === 'signup' && <input type="email" name="email" placeholder="Email" required />}
                            <input type="password" name="password" placeholder="Password" required />
                            <button type="submit" className="modal-btn">Submit</button>
                        </form>
                        <button className="modal-btn" onClick={closeAuthModal}>Close</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;