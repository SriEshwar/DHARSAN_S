import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page works properly</h1>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/product"><button>Product</button></Link>
    </div>
  );
};

export default Home;
