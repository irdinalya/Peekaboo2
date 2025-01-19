import React from 'react';
import products from './products';
import './SearchResultsPage.css';

function SearchResultsPage({ searchResults, onAddToCart, onAddToWishlist }) {
     const results = searchResults.length > 0 ? searchResults : products;
    return (
        <div className="search-results-page">
            <h2>Search Results</h2>
            {results.length === 0 ? (
                <p>No products found. Try searching with different keywords.</p>
            ) : (
                <div className="search-results">
                    {results.map((product) => (
                        <div className="search-result-card" key={product.id}>
                            <img
                                src={process.env.PUBLIC_URL + product.image}  // Ensure correct image path
                                alt={product.name}
                                className="product-image"
                                onError={(e) => { e.target.src = "/images/default-product.jpg"; }}
                            />
                                    <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: RM{product.price.toFixed(2)}</p>
                            <div className="product-actions">
                                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                                <button onClick={() => onAddToWishlist(product)}>Add to Wishlist</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResultsPage;
