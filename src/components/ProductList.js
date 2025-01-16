import React from 'react';
import './ProductList.css';

function ProductList({ selectedCategory, onAddToCart }) {
    const products = [
        { id: 1, name: "Ken Doll", price: 12.99, category: "Barbie", description: "A stylish Ken doll." },
        { id: 2, name: "Barbie Dreamhouse", price: 99.99, category: "Barbie", description: "A luxurious Barbie dreamhouse." },
        { id: 3, name: "Race Car", price: 19.99, category: "Hot Wheels", description: "A sleek race car toy." },
        { id: 4, name: "Track Builder", price: 29.99, category: "Hot Wheels", description: "Build your own race track." },
        { id: 5, name: "Lego Star Wars", price: 49.99, category: "Lego", description: "Build a Star Wars spaceship." },
        { id: 6, name: "Lego Friends", price: 39.99, category: "Lego", description: "A colorful Lego friends set." },
        { id: 7, name: "Plush Bear", price: 19.99, category: "Toy Stuff", description: "A soft and cuddly plush bear." },
        { id: 8, name: "Stuffed Elephant", price: 14.99, category: "Toy Stuff", description: "A cute stuffed elephant." },
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
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
