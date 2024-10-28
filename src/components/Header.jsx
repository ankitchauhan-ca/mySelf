import { useState, useEffect } from 'react';
//import '../static/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <nav className={`navbar ${showNavbar ? '' : 'hidden'}`}>
        <div className="logo">
          <span className="green">My</span>
          <span className="gray">Webon</span>
        </div>
        {/* Conditionally render links based on menuOpen state */}
        {!menuOpen && (
          <div className={`links`}>
            <a href="/">Home</a>
            <a href="portfolio">Portfolio</a>
            <a href="about">About</a>
            <a href="service">Service</a>
            <a href="contact">Contact</a>
          </div>
        )}
        <div className="icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="contact">Contact</a>
        <div className="icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;