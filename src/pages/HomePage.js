import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pageStyles.css';

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set fadeIn to true after a short delay to trigger the fade-in effect
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500); // Adjust timing as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Big Block */}
      <div className={`home-big-block-backer ${fadeIn ? 'fade-in' : ''}`}>
        <div className={`home-big-block-wrapper ${fadeIn ? 'fade-in' : ''}`}>
          <div className={`home-big-block-text-column ${fadeIn ? 'fade-in' : ''}`}>
            <h1 className="home-big-block-text-header">SALE</h1>
            <p className="home-big-block-text-para">Join us in the journey towards a greener future with our curated collection of sustainable and stylish secondhand clothes for eco-conscious families.</p>
            <button className="px-8 py-4 rounded font-medium mr-2 mb-8 home-big-block-button"><Link to="/shop">See our big sale</Link></button>
          </div>
          <img src="/ClothesDisplayHeader.png" alt="Sale" className={`home-big-block-image ${fadeIn ? 'fade-in' : ''}`} />
        </div>
      </div>

      {/* Green Block */}
      <div className={`home-green-block-backer ${fadeIn ? 'fade-in' : ''}`}>
        <div className={`home-green-block-wrapper ${fadeIn ? 'fade-in' : ''}`}>
          <img src="/SustainableClothesRoom.png" alt="Sustainable Clothes" className={`green-image ${fadeIn ? 'fade-in' : ''}`} />
          <div className={`home-green-block-text-column ${fadeIn ? 'fade-in' : ''}`}>
            <strong className="home-big-block-text-para">Save the environment</strong>
            <p className="home-big-block-text-para">Buying and donating sustainable clothes gives them a second life keeping all our clothes out of landfills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
