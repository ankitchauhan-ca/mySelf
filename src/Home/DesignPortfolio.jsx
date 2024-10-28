// src/DesignPortfolio.jsx

import React, { useState, useEffect } from 'react';

const DesignPortfolio = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false); // State for animation

  // Inline styles for the component
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
    },
    headerLink: {
      textDecoration: 'none',
      color: '#333',
      fontSize: '14px',
      position: 'relative',
      overflow: 'hidden',
    },
    title: {
      textAlign: 'center',
      margin: '40px 0',
      overflow: 'hidden',
    },
    titleH1: {
      fontSize: '36px',
      fontWeight: '700',
      margin: '0',
      transition: 'transform 0.5s ease-in-out',
      transform: animate ? 'translateX(0)' : 'translateX(-100%)', // Move into position
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      color: '#333',
      marginTop: '40px',
    },
    contentImg: {
      maxWidth: '100%',
      borderRadius: '8px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      transform: isHovered ? 'scale(0.95)' : 'scale(1)', // Shrink on hover
    },
    contentText: {
      maxWidth: '500px',
      marginLeft: '40px',
      flex: '1',
      overflow: 'hidden',
    },
    line: {
      height: '2px',
      backgroundColor: '#333',
      transition: 'width 0.3s ease',
      width: isHovered ? '100%' : '0%', // Show line on hover
      marginTop: '10px',
      marginLeft: '0',
      marginRight: '0',
    },
    footer: {
      textAlign: 'center',
      margin: '40px 0',
    },
    footerLink: {
      textDecoration: 'none',
      color: '#333',
      fontSize: '16px',
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
  };

  useEffect(() => {
    // Trigger the animation on component mount
    setAnimate(true);
  }, []); // Empty dependency array to run only on mount

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <a href="#" style={styles.headerLink}>Discover</a>
        <a href="#" style={styles.headerLink}>Our portfolio</a>
      </div>
      <div style={styles.title}>
        <h1 style={styles.titleH1}>Browse through our exceptional design portfolio showcase.</h1>
      </div>
      <div style={styles.content}>
        <div 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="https://placehold.co/600x400"
            alt="A laptop displaying a design portfolio with a hand holding a smartphone"
            style={styles.contentImg}
          />
          <div style={styles.line} />
        </div>
        <div style={styles.contentText}>
          <div className="meta">
            <span>Design</span>
            <span>September 9, 2024</span>
          </div>
          <h2>Innovative and Impactful Design Creations</h2>
          <p>
            Phasellus eleifend odio ac diam arcu nibh ut commodo sed. Facilisis
            nibh risus rhoncus egestas. Nulla cras egestas montes nunc mauris
            tortor.
          </p>
        </div>
      </div>
      <div style={styles.footer}>
        <a href="#" style={styles.footerLink}>
          View more portfolio <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default DesignPortfolio;
