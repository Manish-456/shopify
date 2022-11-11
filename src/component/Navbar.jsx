import React from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";

const Navbar = () => {

  const location = useLocation()
  
  const item = useSelector((state) => state.cart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-danger" style={{fontFamily: "cursive"}} to="/">
            Shopify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/'? "active" : ''}`}aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/cart'? "active" : ""}`} to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      HTML
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                     CSS    
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                     JavaScript    
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      React Js
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Python
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Django
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          <button className="btn btn-success">Cart Items <ShoppingCartOutlinedIcon /> : {item.length}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
