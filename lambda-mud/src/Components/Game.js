import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, IconButton, Icon } from '@material-ui/core';

const Game = () => {
  //Hooks
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [uuid, setUuid] = useState('');
  const [room, setRoom] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Initialize connection
    init();
  }, [token, room]);

  // 1.Request: (Replace token string with logged in user's auth token)
  const init = () => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const move = direction => {
    setLoading(true);
    const header = {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json'
    };
    axios
      .post(
        `https://lambda-mud-test.herokuapp.com/api/adv/move`,
        { direction: direction },
        { headers: header }
      )
      .then(res => {
        setRoom(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <header className="App-header">
        {/* Controls */}
        <div className="control-container">
          <IconButton onClick={() => move('w')}>
            <Icon color="secondary">arrow_back</Icon>
          </IconButton>
          <IconButton onClick={() => move('n')}>
            <Icon color="secondary">arrow_upward</Icon>
          </IconButton>
          <IconButton onClick={() => move('s')}>
            <Icon color="secondary">arrow_downward</Icon>
          </IconButton>
          <IconButton onClick={() => move('e')}>
            <Icon color="secondary">arrow_forward</Icon>
          </IconButton>
        </div>

        {/* Mark coodinates */}
        <div id="nort-tag">
          <h1>N</h1>
        </div>
        <div id="east-tag">
          <h1>E</h1>
        </div>
        <div id="south-tag">
          <h1>S</h1>
        </div>
        <div id="west-tag">
          <h1>W</h1>
        </div>

        {/* message and tile */}
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div id="msg-container">
            <h1>{room.title}</h1>
            <br />
            <p>{room.description}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default Game;
