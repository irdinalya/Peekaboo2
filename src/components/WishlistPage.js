import React from 'react';
import './WishlistPage.css';

function WishlistPage({ wishlist, onRemove }) {
    return (
        <div className="wishlist-page">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul className="wishlist-list">
                    {wishlist.map((item) => (
                        <li key={item.id} className="wishlist-item">
                            <img src={`/images/${item.image}`} alt={item.name} className="wishlist-image" />
                            <div className="wishlist-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <button onClick={() => onRemove(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default WishlistPage;