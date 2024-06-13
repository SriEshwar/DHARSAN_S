import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div><br/>
      <div className="inputs">
        <div className="input">
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </div><br/>
        <div className="input">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
      </div><br/>
      <div className="submit-container">
        <button className="submit">Login</button>
      </div>
    </div>
  );
}

export default Login;