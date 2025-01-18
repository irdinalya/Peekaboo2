import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AccountPage from './components/AccountPage';
import CartPage from './components/CartPage';
import PurchasePage from './components/PurchasePage';
import WishlistPage from './components/WishlistPage';
import SearchResultsPage from './components/SearchResultsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState('home');
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const navigateToPage = (page) => {
        setCurrentPage(page);
    };

    //const handleAuth = (username, email) => {
       // saveUserToCSV(username, email);
       // setUser({ username, email });
       // navigateToPage('home');
   // };

    //const handleLogout = () => {
       // setUser(null);
       // navigateToPage('home');
   // };

    //const saveUserToCSV = (username, email) => {
       // const userData = `${username},${email}\n`;
        //fetch('/save-user', {
          //  method: 'POST',
            //headers: {
              //  'Content-Type': 'text/plain',
            //},
          //  body: userData,
       // }).catch((error) => console.error('Error saving user:', error));
  //  };

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

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.find((item) => item.id === product.id)) {
                return [...prevWishlist, product];
            }
            return prevWishlist;
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

    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const handleSearch = (query) => {
        const products = [
            { id: 1, name: "Ken Doll", price: 12.99, description: "A stylish Ken doll." },
            { id: 2, name: "Barbie Dreamhouse", price: 99.99, description: "A luxurious Barbie dreamhouse." },
            { id: 3, name: "Race Car", price: 19.99, description: "A sleek race car toy." },
            { id: 4, name: "Track Builder", price: 29.99, description: "Build your own race track." },
            { id: 5, name: "Lego Star Wars", price: 49.99, description: "Build a Star Wars spaceship." },
        ];
        const results = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        navigateToPage('searchResults');
    };

    return (
        <div className="App">
            <Header
                onCategoryChange={handleCategoryChange}
                navigateToPage={navigateToPage}
                user={user}
                //onAuth={handleAuth}
               // onLogout={handleLogout}
                onSearch={handleSearch}
            />
            {currentPage === 'home' && <HomePage onAddToCart={addToCart} onAddToWishlist={addToWishlist} />}
            {currentPage === 'products' && <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />}
            {currentPage === 'login' && <LoginPage navigateToPage={navigateToPage} onLogin={setUser} />}
            {currentPage === 'signup' && <SignUpPage navigateToPage={navigateToPage} />}
            {currentPage === 'account' && user && <AccountPage user={user} />}
            {currentPage === 'cart' && <CartPage cart={cart} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} navigateToPurchase={() => navigateToPage('purchase')} />}
            {currentPage === 'purchase' && <PurchasePage cart={cart} clearCart={clearCart} />}
            {currentPage === 'wishlist' && <WishlistPage wishlist={wishlist} onRemove={removeFromWishlist} />}
            {currentPage === 'searchResults' && <SearchResultsPage searchResults={searchResults} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />}

            <Footer />
        </div>


    );
}

export default App;