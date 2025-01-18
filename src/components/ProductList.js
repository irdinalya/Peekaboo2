import React from 'react';
import './ProductList.css';

function ProductList({ selectedCategory, onAddToCart, onAddToWishlist }) {
    const products = [
        { id: 1, name: "Ken Doll", price: 12.99, category: "Barbie", description: "A stylish Ken doll.", image: "ken_doll.jpg", reviews: "Great toy for kids!", rating: 4.5 },
        { id: 2, name: "Barbie Dreamhouse", price: 99.99, category: "Barbie", description: "A luxurious Barbie dreamhouse.", image: "barbie_dreamhouse.jpg", reviews: "Perfect for Barbie fans.", rating: 4.8 },
        { id: 3, name: "Race Car", price: 19.99, category: "Hot Wheels", description: "A sleek race car toy.", image: "race_car.jpg", reviews: "Awesome race car.", rating: 4.2 },
        { id: 4, name: "Track Builder", price: 29.99, category: "Hot Wheels", description: "Build your own race track.", image: "track_builder.jpg", reviews: "Fun and creative.", rating: 4.7 },
        { id: 5, name: "Lego Star Wars", price: 49.99, category: "Lego", description: "Build a Star Wars spaceship.", image: "lego_star_wars.jpg", reviews: "Fantastic Lego set.", rating: 4.9 },
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="product-list">
            <h2>{selectedCategory} Products</h2>
            <div className="products">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Customer Review: {product.reviews}</p>
                        <p>Rating: {product.rating}⭐</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
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
