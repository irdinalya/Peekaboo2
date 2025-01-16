import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <section className="banner">
                <img src="banner.jpg" alt="Exciting Deals" className="banner-image" />
                <h2>Don't Miss Our Exclusive Sales!</h2>
            </section>
            <section className="trending">
                <h3>Trending Now</h3>
                <div className="product-showcase">
                    <img src="ken_doll.jpg" alt="Ken Doll" />
                    <img src="race_car.jpg" alt="Race Car" />
                </div>
            </section>
            <section className="best-sellers">
                <h3>Best Sellers</h3>
                <div className="product-showcase">
                    <img src="barbie_dreamhouse.jpg" alt="Barbie Dreamhouse" />
                    <img src="lego_star_wars.jpg" alt="Lego Star Wars" />
                </div>
            </section>
            <section className="new-arrivals">
                <h3>New Arrivals</h3>
                <div className="product-showcase">
                    <img src="plush_bear.jpg" alt="Plush Bear" />
                    <img src="stuffed_elephant.jpg" alt="Stuffed Elephant" />
                </div>
            </section>
        </div>
    );
}

export default HomePage;
