import React from 'react';
import logo from '../logo2.png';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <div class="compass">
          <div class="compass-inner">
            <div class="north">N</div>
            <div class="east">E</div>
            <div class="west">W</div>
            <div class="south">S</div>
            <div class="main-arrow">
              <div class="arrow-up"></div>
              <div class="arrow-down"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
