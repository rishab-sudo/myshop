import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Products from './Products/Products.js';
import CartPage from '../src/Cart/Cart.js'; 
import Contact from './Contact/Contact.js';       

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/Contact" element={<Contact/>}/>     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
