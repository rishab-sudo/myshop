import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#Home">Let Shop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navlinks_div" id="navbarScroll">
        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': "100px"}}>
          <li className="nav-item navitems">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
            <a className="nav-link active" aria-current="page" href="#about">About</a>
            <a className="nav-link active" aria-current="page" href="#product">Product</a>
            <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
          </li>
      
         </ul>
    {/* Cart Icon with Total Quantity */}
    <Link to ="/cart">
    <nav >
    <div style={{ position: 'relative',marginLeft:"15px" }}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png"
            alt="Cart"
            style={{ width: '30px' }}
          />
          {totalQuantity > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'red',
                borderRadius: '50%',
                padding: '5px',
                color: 'white',
                fontSize: '12px',
              }}
            >
              {totalQuantity}
            </span>
          )}
        </div>
      </nav>
      </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar