import React from 'react';

const MarketplacePage = () => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Kids Treeblend Crew T-Shirt', image: '/products/BlackShirt.png', price: '$18.00' },
    { id: 2, name: 'Better Together Hoodie', image: '/products/BlueSweater.png', price: '$45.00' },
    { id: 3, name: 'Kids Classic Sweatpants', image: '/products/GreyPants.png', price: '$20.00' },
    // Add more products as needed
  ];

  return (
    <div className="marketplace-page">
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;