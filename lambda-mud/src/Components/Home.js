import React from 'react';
import logo from '../logo2.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <NavLink to="/login">Log in</NavLink>

        {/* put in a protected route after implementing auth */}
        <NavLink to="/game">Play now</NavLink>
        <h1>Home Page</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Home;
