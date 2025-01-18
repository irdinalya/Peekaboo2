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

    const onLogout = () => {
        setUser(null); // Clear the user state
        navigateToPage('home'); 
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
            { id: 6, name: "Lego Friends", price: 39.99, description: "A colorful Lego friends set." },
            { id: 7, name: "Plush Bear", price: 19.99, description: "A soft and cuddly plush bear." },
            { id: 8, name: "Stuffed Elephant", price: 14.99, description: "A cute stuffed elephant." },
            { id: 9, name: "Barbie Skipper Babysitters", price: 24.99, description: "Barbie Skipper babysitting set."},
            { id: 10, name: "Barbie Glam Convertible", price: 34.99, description: "Barbie's pink convertible car."},
            { id: 11, name: "Barbie Fashionistas", price: 15.99, description: "Barbie with unique styles.",},
            { id: 12, name: "Hot Wheels Monster Truck", price: 14.99, description: "An action-packed monster truck."},
            { id: 13, name: "Hot Wheels Loop Track", price: 24.99, description: "Loop-the-loop race track."},
            { id: 14, name: "Lego Creator 3-in-1", price: 39.99, description: "A 3-in-1 building set."},
            { id: 15, name: "Lego Ninjago", price: 54.99, description: "A Lego ninja-themed set."},
            { id: 16, name: "Stuffed Giraffe", price: 16.99, description: "A tall and cuddly giraffe."},
            { id: 17, name: "Stuffed Panda", price: 17.99, description: "A cute and fluffy panda."},
            { id: 18, name: "Squishy Unicorn", price: 9.99, description: "A slow-rising unicorn squishy."},
            { id: 19, name: "Squishy Ice Cream", price: 7.99, description: "Ice cream cone squishy toy."},
            { id: 20, name: "Squishy Cake", price: 8.99, description: "A delicious-looking cake squishy."},
            { id: 21, name: "Squishy Fruit Set", price: 12.99, description: "A set of fruit-themed squishies."},
            { id: 22, name: "Squishy Dinosaur", price: 10.99, description: "A soft dinosaur squishy."},
            { id: 23, name: "Monopoly Classic", price: 24.99, description: "The timeless Monopoly game."},
            { id: 24, name: "Scrabble", price: 19.99, description: "A word-building board game."},
            { id: 25, name: "Catan", price: 39.99, description: "Build and trade in Catan."},
            { id: 26, name: "Uno", price: 9.99, description: "A fun card game for everyone."},
            { id: 27, name: "Jenga", price: 14.99, description: "A block-stacking game."},
            { id: 28, name: "Iron Man Action Figure", price: 29.99, description: "A detailed Iron Man figure.",},
            { id: 29, name: "Spider-Man Action Figure", price: 27.99, description: "Spider-Man with movable parts."},
            { id: 30, name: "Transformers Bumblebee", price: 39.99, description: "Transforming Bumblebee toy."},
            { id: 31, name: "Batman Action Figure", price: 25.99, description: "A posable Batman figure."},
            { id: 32, name: "Star Wars Darth Vader", price: 34.99, description: "Darth Vader action figure."},
            { id: 33, name: "Math Learning Kit", price: 19.99, description: "A kit to learn math basics.",},
            { id: 34, name: "Alphabet Blocks", price: 14.99, description: "Colorful alphabet blocks."},
            { id: 35, name: "STEM Robot Kit", price: 49.99, description: "Build and code your robot."},
            { id: 36, name: "Periodic Table Puzzle", price: 16.99, description: "Learn elements with puzzles."},
            { id: 37, name: "Shape Sorting Cube", price: 12.99, description: "Learn shapes and colors."}
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
                onLogout={onLogout}
                onSearch={handleSearch}
            />
            {currentPage === 'home' && <HomePage onAddToCart={addToCart} onAddToWishlist={addToWishlist} />}
            {currentPage === 'products' && <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} onAddToWishlist={addToWishlist} />}
            {currentPage === 'login' && (
                <LoginPage
                    navigateToPage={navigateToPage}
                    onLogin={(userInfo) => {
                        console.log('User Info:', userInfo);
                        // Assuming login is successful, set the user state and navigate to account page
                        setUser(userInfo); // Save username and email
                        navigateToPage('account');
                    }}
                />
            )}
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