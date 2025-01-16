import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating} ⭐</p>
            <p>Review: {product.review}</p>
            <button className="add-to-cart">Add to Cart</button>
            <button className="add-to-wishlist">Add to Wishlist</button>
        </div>
    );
}

export default ProductCard;