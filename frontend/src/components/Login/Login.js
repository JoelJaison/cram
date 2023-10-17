import { useState } from "react";
import "./Login.css";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
	e.preventDefault();
  }

  return (
    <div className="login-wrapper">
      <div className="login-header" />
      <div className="login-text">Login</div>
      <div className="login-input">
        <form onClick={handleSubmit}>
          <label className="login-label">Username</label>
          <input
            name="username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
			className="login-input-form"
          />
          <br />
          <label className="login-label">Name:</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
			className="login-input-form"
          />
          <br />
		  <input 
          type='submit' 
          value='Sign In' 
		  className="signin-button"
        />
        </form>
      </div>
    </div>
  );
};

export default Login;
