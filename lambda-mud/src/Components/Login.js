import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import axios from 'axios';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    //create object with credentials
    const loginCredentials = {
      username: username,
      password: password
    };

    const signUpCredentials = {
      username: username,
      password1: password,
      password2: password2
    };
    //API Call here before clearing the fields
    setError(false);
    if (register) {
      signUp(signUpCredentials);
    } else {
      signIn(loginCredentials);
    }
    //
    setUsername('');
    setPassword('');
    setPassword2('');
  };

  function signIn(credentials) {
    axios
      .post(`${process.env.REACT_APP_API}/api/login/`, credentials)
      .then(response => {
        // place token in local storage for axiosWithAuth to handle it
        localStorage.setItem('token', response.data.key);
        //redirect user to game
        props.history.push('/game');
        setLoading(false);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }

  function signUp(credentials) {
    axios
      .post(`${process.env.REACT_APP_API}/registration/`, credentials)
      .then(response => {
        // place token in local storage for axiosWithAuth to handle it
        localStorage.setItem('token', response.data.key);
        //redirect user to game
        props.history.push('/game');
        setLoading(false);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }

  if (loading) {
    return (
      <div>
        <header className="App-header">
          <CircularProgress />
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <header className="App-header">
          <h1>{register ? 'Sign up' : 'Login'}</h1>
          <br />
          <form onSubmit={handleSubmit}>
            {error && (
              <h1 className="error">Incorrect email or password, try again.</h1>
            )}
            <TextField
              name="username"
              label="Email"
              variant="outlined"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="textField"
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="textField"
            />
            {register && (
              <span>
                <TextField
                  name="password2"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  value={password2}
                  onChange={e => setPassword2(e.target.value)}
                  required
                  className="textField"
                />
                <br />
                <br />
                <p id="pass-req">
                  * Password must contain at least 8 characters.
                </p>
              </span>
            )}
            <br />
            <br />
            <Button type="submit" id="submitButton">
              {register ? 'Sign up' : 'Login'}
            </Button>
          </form>
          <p onClick={() => setRegister(!register)} id="signupButton">
            {register ? 'Already have account?' : 'Sign up'}
          </p>
        </header>
      </div>
    );
  }
};

export default Login;
