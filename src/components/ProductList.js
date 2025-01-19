import React from 'react';
import products from './products';
import './ProductList.css';

function ProductList({ selectedCategory, onAddToCart, onAddToWishlist }) {

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const CategoryFilter = ({ onCategoryChange }) => {
        const categories = ['All', 'Barbie', 'Hot Wheels', 'Lego', 'Toy Stuff', 'Squishy', 'Board Game', 'Action Figure', 'Educational Toy'];

        return (
            <div className="category-filter">
                {categories.map((category) => (
                    <button key={category} onClick={() => onCategoryChange(category)}>
                        {category}
                    </button>
                ))}
            </div>
        );
    };

    const ProductCard = ({ product }) => (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: RM{product.price}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating} ⭐</p>
            <p>Review: {product.review}</p>
            <button className="add-to-cart" onClick={() => onAddToCart(product)}>Add to Cart</button>
            <button className="add-to-wishlist" onClick={() => onAddToWishlist(product)}>Add to Wishlist</button>
        </div>
    );

    return (
        <div className="product-list">
            <h2>{selectedCategory} Products</h2>
            <div className="products">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={`/${product.image}`} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Customer Review: {product.reviews}</p>
                        <p>Rating: {product.rating}⭐</p>
                        <p>Price: RM{product.price.toFixed(2)}</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                            <button className="wishlist-btn" onClick={() => onAddToWishlist(product)}>Add to Wishlist
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
