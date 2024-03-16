import React from 'react';

const MarketplacePage = () => {
  // Sample data for products
  const products = [
    { id: 1, name: 'Kids Treeblend Crew T-Shirt', image: '/products/BlackShirt.png', price: '$12.00', brand: "Unify", gender: "Unisex", size: "12-24 Months", },
    { id: 2, name: 'Better Together Hoodie', image: '/products/BlueSweater.png', price: '$30.00', brand: "Flaphappy", gender: "Unisex", size: "12-24 Months", },
    { id: 3, name: 'Kids Classic Sweatpants', image: '/products/sweat.png', price: '$15.00', brand: "Petitpli", gender: "Unisex", size: "12-24 Months", },
    { id: 4, name: 'Kids Socks', image: '/products/socks.png', price: '$5.00', brand: "Maxaloon", gender: "Unisex", size: "12-24 Months",},
    { id: 5, name: 'Kids Winter Hat', image: '/products/hat.jpeg', price: '$8.00', brand: "SimpleSeedBaby", gender: "Unisex", size: "12-24 Months", },
    { id: 6, name: 'Kids Spaceship Hoodie', image: '/products/rocket.jpg', price: '$28.00', brand: "Petitpli", gender: "Unisex", size: "12-24 Months",},
    { id: 7, name: 'Kids Buttondown Shirt', image: '/products/button.jpeg', price: '$13.00', brand: "Unify", gender: "Unisex", size: "12-24 Months",},
    { id: 8, name: 'Girls Buttondown Shirt', image: '/products/e.png', price: '$11.00', brand: "Flaphappy", gender: "Girls", size: "12-24 Months",},

  ];

  return (
    <div className="marketplace-page">
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{"By: " + product.brand}</p>
            <p>{product.price}</p>
            <p>{"Gender: " + product.gender}</p>
            <h4 className="pb-2">{"Size: " + product.size}</h4>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;