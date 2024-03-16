import React, { useState, useEffect } from 'react';
import Marketplace from "./MarketplacePage";

const Shop = () => {
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
    <div className="container mx-auto">
      {/* Title and Subtext */}
      <div className={`fade-in-text transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl font-bold text-center p-4">Resewn Shop 🛍️</h1>
        <p className="text-lg text-center p-2">Explore our collection of sustainable products from your favourite brands!</p>
      </div>

      {/* Marketplace Component */}
      <div className={`fade-in-content transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <Marketplace />
      </div>
    </div>
  );
};

export default Shop;
