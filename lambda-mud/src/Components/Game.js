import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Game = () => {
  //Hooks
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [uuid, setUuid] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    //Initialize connection
    init();
    console.log(token);
  }, [token]);

  // 1.Request: (Replace token string with logged in user's auth token)
  function init() {
    const header = {
      Authorization: `Token ${token}`
    };
    axios
      .get(`https://lambda-mud-test.herokuapp.com/api/adv/init/`, {
        headers: header
      })
      .then(res => {
        setRoom(res.data);
        setUuid(res.data.uuid);
        console.log('XXXX', room);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <header className="App-header">
        <h1>Game</h1>
      </header>
    </div>
  );
};

export default Game;
