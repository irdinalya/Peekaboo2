import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import AccountPage from './components/AccountPage';
import CartPage from './components/CartPage';
import './App.css';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState('home');
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const navigateToPage = (page) => {
        setCurrentPage(page);
    };

    const handleAuth = (username, email) => {
        saveUserToCSV(username, email);
        setUser({ username, email });
        navigateToPage('home');
    };

    const handleLogout = () => {
        setUser(null);
        navigateToPage('home');
    };

    const saveUserToCSV = (username, email) => {
        const userData = `${username},${email}\n`;
        fetch('/save-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: userData,
        }).catch((error) => console.error('Error saving user:', error));
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const updateCartQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            ).filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return (
        <div className="App">
            <Header
                onCategoryChange={handleCategoryChange}
                navigateToPage={navigateToPage}
                user={user}
                onAuth={handleAuth}
                onLogout={handleLogout}
            />
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'products' && <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} />}
            {currentPage === 'account' && user && <AccountPage user={user} />}
            {currentPage === 'cart' && <CartPage cart={cart} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} />}
        </div>
    );
}

export default App;
