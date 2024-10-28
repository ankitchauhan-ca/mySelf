import React from 'react';
import DesignServices from '../Home/DesignServices';
import DesignPortfolio from '../Home/DesignPortfolio';
import CuratedCollection from '../Home/CuratedCollection';
//import '../static/HomePage.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="image-container">
        <img src="../public/_image/first.jpg" alt="A psychologist sitting on a chair, writing in a notebook, with a plant in the background" className="image" />
        <div className="text-overlay">
          <h1 className="animated-text">Welcome to MyWebon</h1>
          <p className="animated-subtext">This is my Assignment Project to define my Skills</p>
        </div>
        <div className="down-arrow">
          <span>&#8595;</span>
        </div>
      </div>
      <DesignPortfolio />
      <DesignServices />
      <CuratedCollection />
    </div>
  );
};

export default Home;
