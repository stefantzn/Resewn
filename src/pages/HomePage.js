import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set showText to true after 500ms to trigger the fade-in effect
    const timer = setTimeout(() => {
      console.log('Setting showText to true');
      setShowText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  console.log('showText:', showText);

  return (
    <div className="container mx-auto p-4 justify-contents allign-center">
      <h1 className={`text-3xl font-bold text-center transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>Resewn</h1>
    </div>
  );
}

export default HomePage;
