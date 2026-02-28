import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="logo white">
                        <span className="logo-icon">M+</span>
                        <span className="logo-text">MediCare Plus</span>
                    </div>
                    <p>
                        Your trusted partner in healthcare. Providing modern medical solutions
                        with compassion and excellence.
                    </p>
                    <div className="social-links">
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                        <a href="#">LN</a>
                        <a href="#">IG</a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#">Cardiology</a></li>
                        <li><a href="#">Neurology</a></li>
                        <li><a href="#">Pediatrics</a></li>
                        <li><a href="#">Lab Test</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Working Hours</h4>
                    <p>Mon - Fri: 8:00 AM - 9:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                    <p className="emergency">Emergency: 24/7 Available</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 MediCare Plus Hospital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
