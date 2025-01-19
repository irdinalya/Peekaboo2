import React from 'react';
import './ProductList.css';

function ProductList({ selectedCategory, onAddToCart, onAddToWishlist }) {
    const products = [
        { id: 1, name: "Ken Doll", price: 12.99, category: "Barbie", description: "A stylish Ken doll.", image: "images/ken_doll.jpg", reviews: "Great toy for kids!", rating: 4.5 },
        { id: 2, name: "Barbie Dreamhouse", price: 99.99, category: "Barbie", description: "A luxurious Barbie dreamhouse.", image: "images/barbie_dreamhouse.jpg", reviews: "Perfect for Barbie fans.", rating: 4.8 },
        { id: 3, name: "Race Car", price: 19.99, category: "Hot Wheels", description: "A sleek race car toy.", image: "images/race_car.jpg", reviews: "Awesome race car.", rating: 4.2 },
        { id: 4, name: "Track Builder", price: 29.99, category: "Hot Wheels", description: "Build your own race track.", image: "images/track_builder.jpg", reviews: "Fun and creative.", rating: 4.7 },
        { id: 5, name: "Lego Star Wars", price: 49.99, category: "Lego", description: "Build a Star Wars spaceship.", image: "images/lego_star_wars.jpg", reviews: "Fantastic Lego set.", rating: 4.9 },
        { id: 6, name: "Lego Friends", price: 39.99, category: "Lego", description: "A colorful Lego friends set.", image: "images/lego_friends.jpg", reviews: "Kids love it!", rating: 4.6 },
        { id: 7, name: "Plush Bear", price: 19.99, category: "Toy Stuff", description: "A soft and cuddly plush bear.", image: "images/plush_bear.jpg", reviews: "So cuddly!", rating: 4.8 },
        { id: 8, name: "Stuffed Elephant", price: 14.99, category: "Toy Stuff", description: "A cute stuffed elephant.", image: "images/stuffed_elephant.jpg", reviews: "Adorable!", rating: 4.4 },
        { id: 9, name: "Barbie Skipper Babysitters", price: 24.99, category: "Barbie", description: "Barbie Skipper babysitting set.", image: "images/barbie_skipper.jpg", reviews: "Cute and creative.", rating: 4.6 },
        { id: 10, name: "Barbie Glam Convertible", price: 34.99, category: "Barbie", description: "Barbie's pink convertible car.", image: "images/barbie_convertible.jpg", reviews: "Stylish and fun.", rating: 4.7 },
        { id: 11, name: "Barbie Fashionistas", price: 15.99, category: "Barbie", description: "Barbie with unique styles.", image: "images/barbie_fashionistas.jpg", reviews: "Diverse and trendy.", rating: 4.8 },
        { id: 12, name: "Hot Wheels Monster Truck", price: 14.99, category: "Hot Wheels", description: "An action-packed monster truck.", image: "images/hot_wheels_truck.jpg", reviews: "Perfect for stunts.", rating: 4.4 },
        { id: 13, name: "Hot Wheels Loop Track", price: 24.99, category: "Hot Wheels", description: "Loop-the-loop race track.", image: "images/hot_wheels_loop.jpg", reviews: "Thrilling race track!", rating: 4.6 },
        { id: 14, name: "Lego Creator 3-in-1", price: 39.99, category: "Lego", description: "A 3-in-1 building set.", image: "images/lego_creator.jpg", reviews: "Great value for variety.", rating: 4.7 },
        { id: 15, name: "Lego Ninjago", price: 54.99, category: "Lego", description: "A Lego ninja-themed set.", image: "images/lego_ninjago.jpg", reviews: "Exciting and detailed.", rating: 4.8 },
        { id: 16, name: "Stuffed Giraffe", price: 16.99, category: "Toy Stuff", description: "A tall and cuddly giraffe.", image: "images/stuffed_giraffe.jpg", reviews: "Kids adore it!", rating: 4.7 },
        { id: 17, name: "Stuffed Panda", price: 17.99, category: "Toy Stuff", description: "A cute and fluffy panda.", image: "images/stuffed_panda.jpg", reviews: "Adorable and soft.", rating: 4.9 },
        { id: 18, name: "Squishy Unicorn", price: 9.99, category: "Squishy", description: "A slow-rising unicorn squishy.", image: "images/squishy_unicorn.jpg", reviews: "Super satisfying!", rating: 4.5 },
        { id: 19, name: "Squishy Ice Cream", price: 7.99, category: "Squishy", description: "Ice cream cone squishy toy.", image: "images/squishy_icecream.jpg", reviews: "Colorful and fun.", rating: 4.6 },
        { id: 20, name: "Squishy Cake", price: 8.99, category: "Squishy", description: "A delicious-looking cake squishy.", image: "images/squishy_cake.jpg", reviews: "Feels amazing!", rating: 4.7 },
        { id: 21, name: "Squishy Fruit Set", price: 12.99, category: "Squishy", description: "A set of fruit-themed squishies.", image: "images/squishy_fruit.jpg", reviews: "Kids love the variety.", rating: 4.8 },
        { id: 22, name: "Squishy Dinosaur", price: 10.99, category: "Squishy", description: "A soft dinosaur squishy.", image: "images/squishy_dinosaur.jpg", reviews: "Great stress reliever.", rating: 4.6 },
        { id: 23, name: "Monopoly Classic", price: 24.99, category: "Board Game", description: "The timeless Monopoly game.", image: "images/monopoly_classic.jpg", reviews: "Family favorite.", rating: 4.9 },
        { id: 24, name: "Scrabble", price: 19.99, category: "Board Game", description: "A word-building board game.", image: "images/scrabble.jpg", reviews: "Great for vocabulary.", rating: 4.8 },
        { id: 25, name: "Catan", price: 39.99, category: "Board Game", description: "Build and trade in Catan.", image: "images/catan.jpg", reviews: "Perfect for strategy lovers.", rating: 4.7 },
        { id: 26, name: "Uno", price: 9.99, category: "Board Game", description: "A fun card game for everyone.", image: "images/uno.jpg", reviews: "Easy and exciting.", rating: 4.8 },
        { id: 27, name: "Jenga", price: 14.99, category: "Board Game", description: "A block-stacking game.", image: "images/jenga.jpg", reviews: "Perfect for parties.", rating: 4.6 },
        { id: 28, name: "Iron Man Action Figure", price: 29.99, category: "Action Figure", description: "A detailed Iron Man figure.", image: "images/ironman_actionfigure.jpg", reviews: "Kids love superheroes.", rating: 4.7 },
        { id: 29, name: "Spider-Man Action Figure", price: 27.99, category: "Action Figure", description: "Spider-Man with movable parts.", image: "images/spiderman_actionfigure.jpg", reviews: "Great for roleplay.", rating: 4.8 },
        { id: 30, name: "Transformers Bumblebee", price: 39.99, category: "Action Figure", description: "Transforming Bumblebee toy.", image: "images/transformers_bumblebee.jpg", reviews: "Epic transformation!", rating: 4.9 },
        { id: 31, name: "Batman Action Figure", price: 25.99, category: "Action Figure", description: "A posable Batman figure.", image: "images/batman_actionfigure.jpg", reviews: "Cool and detailed.", rating: 4.6 },
        { id: 32, name: "Star Wars Darth Vader", price: 34.99, category: "Action Figure", description: "Darth Vader action figure.", image: "images/darth_vader.jpg", reviews: "Perfect for collectors.", rating: 4.8 },
        { id: 33, name: "Math Learning Kit", price: 19.99, category: "Educational Toy", description: "A kit to learn math basics.", image: "images/math_kit.jpg", reviews: "Great for early learning.", rating: 4.6 },
        { id: 34, name: "Alphabet Blocks", price: 14.99, category: "Educational Toy", description: "Colorful alphabet blocks.", image: "images/alphabet_blocks.jpg", reviews: "Helps with letters.", rating: 4.8 },
        { id: 35, name: "STEM Robot Kit", price: 49.99, category: "Educational Toy", description: "Build and code your robot.", image: "images/stem_robot.jpg", reviews: "Amazing for STEM skills.", rating: 4.9 },
        { id: 36, name: "Periodic Table Puzzle", price: 16.99, category: "Educational Toy", description: "Learn elements with puzzles.", image: "images/periodic_puzzle.jpg", reviews: "Fun and educational.", rating: 4.7 },
        { id: 37, name: "Shape Sorting Cube", price: 12.99, category: "Educational Toy", description: "Learn shapes and colors.", image: "images/shape_cube.jpg", reviews: "Simple and effective.", rating: 4.5 }
    ];

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
