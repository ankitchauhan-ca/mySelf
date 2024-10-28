import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <h1>MyPortfolio</h1>
            </div>
            <div className="footer-sections">
                <div className="footer-section">
                    <h2>Explore</h2>
                    <p>Home</p>
                    <p>About Me</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
                <div className="footer-section">
                    <h2>Resources</h2>
                    <p>Blog</p>
                    <p>Documentation</p>
                    <p>Changelog</p>
                </div>
                <div className="footer-section">
                    <h2>Support</h2>
                    <p>FAQs</p>
                    <p>Contact Support</p>
                    <p>Feedback</p>
                </div>
                <div className="footer-section">
                    <h2>Legal</h2>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>License</p>
                </div>
            </div>
            <div className="footer-icons">
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="footer-text">
                <p>
                    <span>Style Guide</span>
                    <span>Customize</span>
                </p>
                <p>© 2024 Developed by [Your Name]. Powered by Webflow.</p>
            </div>
        </footer>
    );
};

export default Footer;
