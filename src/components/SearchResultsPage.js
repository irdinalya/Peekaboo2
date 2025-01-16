import React from 'react';
import './SearchResultsPage.css';

function SearchResultsPage({ searchResults, onAddToCart, onAddToWishlist }) {
    return (
        <div className="search-results-page">
            <h2>Search Results</h2>
            {searchResults.length === 0 ? (
                <p>No products found. Try searching with different keywords.</p>
            ) : (
                <div className="search-results">
                    {searchResults.map((product) => (
                        <div className="search-result-card" key={product.id}>
                            <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price.toFixed(2)}</p>
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
