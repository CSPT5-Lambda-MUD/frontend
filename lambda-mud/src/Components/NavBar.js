import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/" activeClassName="selectedLink" id="home">
          Home
        </NavLink>
        <NavLink to="/login" activeClassName="selectedLink">
          Log in
        </NavLink>
        {/* put in a protected route after implementing auth */}
        <NavLink to="/game" activeClassName="selectedLink">
          Play now
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
