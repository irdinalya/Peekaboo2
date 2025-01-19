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

                
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />


<div class="footer-section text-center mt-4">
    <h3>Follow Us</h3>
    <div class="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="mx-2">
            <i class="fab fa-facebook fa-3x"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="mx-2">
            <i class="fab fa-instagram fa-3x"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" class="mx-2">
            <i class="fab fa-twitter fa-3x"></i>
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
