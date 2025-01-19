import React, { useState } from 'react';
import './Header.css';

    function Header({ onCategoryChange, navigateToPage, user, onAuth, onLogout, onSearch}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Barbie', 'Hot Wheels', 'Lego', 'Toy Stuff', 'Squishy', 'Board Game', 'Action Figure', 'Educational Toy'];

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleCategoryClick = (category) => {
        onCategoryChange(category);
        setDropdownVisible(false);
        navigateToPage('products');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <header className="App-header">
            <div className="logo" onClick={() => navigateToPage('home')}>
                <img src="/images/logo.jpg" alt="Peekaboo Toy Shop Logo" className="logo-image"/>
            </div>

            <div className="header-buttons">
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="header-btn">Search</button>
                </form>
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
                        <button className="header-btn" onClick={() => navigateToPage('wishlist')}>Wishlist</button>
                        <button className="header-btn" onClick={() => navigateToPage('cart')}>Cart</button>
                        <button className="header-btn" onClick={() => navigateToPage('account')}>My Account</button>
                        <button className="header-btn" onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className="header-btn" onClick={() => navigateToPage('wishlist')}>Wishlist</button>
                        <button className="header-btn" onClick={() => navigateToPage('cart')}>Cart</button>
                        <button className="header-btn" onClick={() => navigateToPage('login')}>Login</button>
                        <button className="header-btn" onClick={() => navigateToPage('signup')}>Sign Up</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;