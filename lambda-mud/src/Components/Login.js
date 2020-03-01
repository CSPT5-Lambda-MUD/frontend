import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {}, []);

  const handleSubmit = e => {
    e.preventDefault();
    //create object with credentials
    const credentials = {
      username: username,
      password: password
    };
    //API Call here before clearing the fields
    axios
      .post(`https://lambda-mud-test.herokuapp.com/api/login/, ${credentials}`)
      .then(response => {
        console.log(response.data);
        // place token in local storage for axiosWithAuth to handle it
        localStorage.setItem('token', response.data);
        //redirect user to game
        // props.history.push('protected');
      })
      .catch(error => {
        console.log(error);
      });
    //
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <header className="App-header">
        <h1>Login</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            name="password"
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button type="submit">Login</Button>
        </form>
      </header>
    </div>
  );
};

export default Login;
