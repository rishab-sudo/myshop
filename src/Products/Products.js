import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { MdDelete } from "react-icons/md";
import "./Products.css"

// Sample Product Data with Images
const products = [
  { id: 1, name: 'Men Shirt', category: 'Men', price: 25, image: 'https://via.placeholder.com/150?text=Men+Shirt' },
  { id: 2, name: 'Men Jacket', category: 'Men', price: 50, image: 'https://via.placeholder.com/150?text=Men+Jacket' },
  { id: 3, name: 'Women Dress', category: 'Women', price: 35, image: 'https://via.placeholder.com/150?text=Women+Dress' },
  { id: 4, name: 'Women Scarf', category: 'Women', price: 20, image: 'https://via.placeholder.com/150?text=Women+Scarf' },
  { id: 5, name: 'Unisex Watch', category: 'All', price: 100, image: 'https://via.placeholder.com/150?text=Unisex+Watch' },
];

function Products() {
  const [category, setCategory] = useState('All');
  const dispatch = useDispatch();


  const filteredProducts = products.filter(
    (product) => category === 'All' || product.category === category
  );

  return (
    <div>
   
        <h1>Our Products</h1>
        <div className='cat-btn-div'>
          <button className='cat-btn' onClick={() => setCategory('All')}>All</button>
          <button className='cat-btn'  onClick={() => setCategory('Men')}>Men</button>
          <button className='cat-btn' onClick={() => setCategory('Women')}>Women</button>
        </div>
        

      {/* Render Product Cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '20px',
          gap: '35px',
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} 
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className='cart-btn-div'>
            <button className="addcart-btn" onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
            <MdDelete className='del-icon' onClick={() => dispatch(addToCart(product))}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
