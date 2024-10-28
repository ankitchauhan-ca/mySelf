import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <h1>MyWebon</h1>
            </div>
            <div className="footer-sections">
                <div className="footer-section">
                    <h2>Explore</h2>
                    <p>Home</p>
                    <p>Speakers</p>
                </div>
                <div className="footer-section">
                    <h2>Support</h2>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
                <div className="footer-section">
                    <h2>Others</h2>
                    <p>Style Guide</p>
                    <p>Changelog</p>
                    <p>Blog</p>
                </div>
                <div className="footer-section">
                    <h2>Utility</h2>
                    <p>Password</p>
                    <p>Instruction</p>
                    <p>License</p>
                </div>
            </div>
            <div className="footer-icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-github"></i>
            </div>
            <div className="footer-text">
                <p>
                    <span>License</span>
                    <span>Style Guide</span>
                    <span>Customize</span>
                </p>
                <p>© Designed & Developed by Lucas Gusso Powered by Webflow</p>
            </div>
        </div>
    );
};

export default Footer;
