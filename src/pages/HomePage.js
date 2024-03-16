import React from 'react';
import "./pageStyles.css"
import { Link } from 'react-router-dom';
// import MarketplacePage from '../components/MarketplacePage';

const HomePage = () => {
  return (
    <div>
        <div className="home-big-block-backer">
          <div className="home-big-block-wrapper">
            <div className="home-big-block-text-column">
              <h1 className="home-big-block-text-header">SALE</h1>
              <p className="home-big-block-text-para">Join us in the journey towards a greener future with our curated collection of sustainable and stylish secondhand clothes for eco-conscious families.</p>
            <button className="px-8 py-4 rounded font-medium mr-2 mb-8 home-big-block-button"><Link to="/shop">See our big sale</Link></button>
            </div>
            <img src="/ClothesDisplayHeader.png"/>
          </div>
        </div>
        <div className="home-green-block-backer">
          <div className="home-green-block-wrapper">
          <img src="/SustainableClothesRoom.png" className="green-image"/>
            <div className="home-green-block-text-column">
              <strong className="home-big-block-text-para">Save the environment</strong>
              <p className="home-big-block-text-para">Buying and donating sustainable clothes gives them a second life keeping all our clothes out of landfills.</p>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default HomePage;