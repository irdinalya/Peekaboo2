import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="App-footer">
            <div className="footer-sections">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>
                        Peekaboo Toy Shop is your one-stop shop for the latest and greatest toys for kids
                        of all ages. Discover trending toys, exclusive deals, and timeless classics.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a> Help Center</a></li>
                        <li><a> Shipping & Delivery</a></li>
                        <li><a>Returns & Refunds</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/facebook-icon.png" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/instagram-icon.png" alt="Instagram" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/images/twitter-icon.png" alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Peekaboo Toy Shop. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
