import React from 'react';
import products from './products';
import './WishlistPage.css';

function WishlistPage({ wishlist, onRemove }) {
    const wishlistImages = wishlist.map((item) => {
        const product = products.find((p) => p.id === item.id);
        return { ...item, image: product ? product.image : "/images/default-product.jpg" };
    });
    return (
        <div className="wishlist-page">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p className="empty-wishlist">Your wishlist is empty.</p>
            ) : (
                <ul className="wishlist-list">
                    {wishlistImages.map((item) => (
                        <li key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.name} className="product-image"/>
                            <div className="wishlist-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p className="wishlist-price">Price: RM{item.price.toFixed(2)}</p>
                                <button onClick={() => onRemove(item.id)} className="remove-button">
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default WishlistPage;
