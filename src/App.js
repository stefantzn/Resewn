import React from 'react';
import Navbar from './Navbar';
import './App.css'; // Import CSS for global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to Resewn</h1>
        <p>We are dedicated to creating sustainable fashion!</p>
      </header>
      <section id="about" className="About-section">
        <h2>About Us</h2>
        <p>Resewn is a company committed to reducing waste in the fashion industry by upcycling old clothing and materials into new, stylish garments. Our mission is to promote sustainability and eco-consciousness in fashion.</p>
      </section>
      <section id="products" className="Products-section">
        <h2>Our Products</h2>
        <div className="Product">
          <h3>Upcycled T-Shirts</h3>
          <p>Our upcycled t-shirts are made from reclaimed materials, reducing waste and minimizing our environmental impact.</p>
        </div>
        <div className="Product">
          <h3>Recycled Jeans</h3>
          <p>Our recycled jeans are crafted from old denim, giving them a unique look and reducing the need for new materials.</p>
        </div>
      </section>
      <footer id="contact" className="App-footer">
        <p>Contact Us:</p>
        <ul>
          <li>Email: info@resewn.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
