import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';

// Components
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* Private routes */}
      <PrivateRoute exact path="/game" component={Game} />
    </div>
  );
}

export default App;
