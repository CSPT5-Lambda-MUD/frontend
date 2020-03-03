import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, [isLogin]);

  //remove token from local storage
  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <nav>
        <NavLink exact to="/" activeClassName="selectedLink" id="home">
          Home
        </NavLink>
        {isLogin ? (
          <NavLink onClick={logout} to="/login" activeClassName="selectedLink">
            Log out
          </NavLink>
        ) : (
          <NavLink to="/login" activeClassName="selectedLink">
            Log in
          </NavLink>
        )}

        {/* put in a protected route after implementing auth */}
        <NavLink to="/game" activeClassName="selectedLink">
          Play now
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
