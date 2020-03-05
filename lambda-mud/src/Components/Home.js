import React from 'react';
import logo from '../logo2.png';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <div className="compass">
          <div className="compass-inner">
            <div className="north">N</div>
            <div className="east">E</div>
            <div className="west">W</div>
            <div className="south">S</div>
            <div className="main-arrow">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
