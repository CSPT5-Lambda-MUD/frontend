import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    console.log(username, password);
    //API Call here before clearing the fields

    //
    setUsername('');
    password('');
  };

  return (
    <div>
      <header className="App-header">
        <h1>Login</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button>Login</Button>
        </form>
      </header>
    </div>
  );
};

export default Login;
