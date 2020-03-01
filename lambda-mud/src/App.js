import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

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
      <Route exact path="/game" component={Game} />
    </div>
  );
}

export default App;
