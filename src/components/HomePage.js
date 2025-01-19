import React, { useEffect } from 'react'; // Import useEffect

import './HomePage.css';

function HomePage({ onAddToCart, onAddToWishlist }) {
    useEffect(() => {
        const video = document.getElementById("introVideo");
        const videoOverlay = document.getElementById("video-overlay");

        // Disable scrolling when the overlay is displayed
        document.body.style.overflow = "hidden";

        // Event listener to hide the overlay and re-enable scrolling
        video.addEventListener("ended", () => {
            videoOverlay.style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable scrolling
        });

        // Cleanup function
        return () => {
            document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
        };
    }, []);
    return (
        <div className="home-page">
            <div id="video-overlay">
                <video id="introVideo" autoPlay muted playsInline>
                    <source src="video/intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
<section className="banner">
    <video className="banner-video" autoPlay muted loop playsInline>
        <source src="/video/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <img src="/images/malaysia1.jpg" alt="Malaysia" className="overlay-image" />

    
</section>

            <div className="home-page2">
            <section className="trending">
                <h3>Trending Now</h3>
                <div className="product-showcase">
                    <div className="product-card">
                        <img src="/images/ken_doll.jpg" alt="Ken Doll" />
                        <h4>Ken Doll</h4>
                        <p>A stylish Ken doll.</p>
                        <p>Rating: 4.5 ⭐</p>
                        <p>Reviews: Great toy for kids!</p>
                        <p>Price: RM12.99</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart({ id: 1, name: "Ken Doll", price: 12.99 })}>Add to Cart</button>
                            <button onClick={() => onAddToWishlist({ id: 1, name: "Ken Doll", price: 12.99 })}>Add to Wishlist</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="/images/race_car.jpg" alt="Race Car" />
                        <h4>Race Car</h4>
                        <p>A sleek race car toy.</p>
                        <p>Rating: 4.2 ⭐</p>
                        <p>Reviews: Awesome race car.</p>
                        <p>Price: RM19.99</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart({ id: 3, name: "Race Car", price: 19.99 })}>Add to Cart</button>
                            <button onClick={() => onAddToWishlist({ id: 3, name: "Race Car", price: 19.99 })}>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="best-sellers">
                <h3>Best Sellers</h3>
                <div className="product-showcase">
                    <div className="product-card">
                        <img src="/images/barbie_dreamhouse.jpg" alt="Barbie Dreamhouse" />
                        <h4>Barbie Dreamhouse</h4>
                        <p>A luxurious Barbie dreamhouse.</p>
                        <p>Rating: 4.8 ⭐</p>
                        <p>Reviews: Perfect for Barbie fans.</p>
                        <p>Price: RM99.99</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart({ id: 2, name: "Barbie Dreamhouse", price: 99.99 })}>Add to Cart</button>
                            <button onClick={() => onAddToWishlist({ id: 2, name: "Barbie Dreamhouse", price: 99.99 })}>Add to Wishlist</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="/images/lego_star_wars.jpg" alt="Lego Star Wars" />
                        <h4>Lego Star Wars</h4>
                        <p>Build a Star Wars spaceship.</p>
                        <p>Rating: 4.9 ⭐</p>
                        <p>Reviews: Fantastic Lego set.</p>
                        <p>Price: RM49.99</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart({ id: 5, name: "Lego Star Wars", price: 49.99 })}>Add to Cart</button>
                            <button onClick={() => onAddToWishlist({ id: 5, name: "Lego Star Wars", price: 49.99 })}>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-arrivals">
                <h3>New Arrivals</h3>
                <div className="product-showcase">
                    <div className="product-card">
                        <img src="/images/plush_bear.jpg" alt="Plush Bear" />
                        <h4>Plush Bear</h4>
                        <p>A soft and cuddly plush bear.</p>
                        <p>Rating: 4.8 ⭐</p>
                        <p>Reviews: So cuddly!</p>
                        <p>Price: RM19.99</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart({ id: 7, name: "Plush Bear", price: 19.99 })}>Add to Cart</button>
                            <button onClick={() => onAddToWishlist({ id: 7, name: "Plush Bear", price: 19.99 })}>Add to Wishlist</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <img src="/images/stuffed_elephant.jpg" alt="Stuffed Elephant" />
                        <h4>Stuffed Elephant</h4>
                        <p>A cute stuffed elephant.</p>
                        <p>Rating: 4.4 ⭐</p>
                        <p>Reviews: Adorable!</p>
                        <p>Price: RM14.99</p>
                        <div className="product-actions">
                            <button onClick={() => onAddToCart({ id: 8, name: "Stuffed Elephant", price: 14.99 })}>Add to Cart</button>
                            <button onClick={() => onAddToWishlist({ id: 8, name: "Stuffed Elephant", price: 14.99 })}>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}

export default HomePage;





