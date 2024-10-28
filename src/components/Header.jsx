import { useState, useEffect } from 'react';

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
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </div>
        <div className="icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#">Offer</a>
        <a href="#">Features</a>
        <a href="#">Portfolio</a>
        <a href="#">Reference</a>
        <a href="#">About</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
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
