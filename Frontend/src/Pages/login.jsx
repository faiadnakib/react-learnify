import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import "./Login.css"; // Import your custom CSS file

const Login = () => {
  const [validated, setValidated] = useState(false);
  const { login } = useAuthContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const formData = new FormData(event.target);
    const { username, password } = Object.fromEntries(formData.entries());
    login(username, password);
    setValidated(true);
  };

  return (
    <div className="login-container">
      <div className="card">
        <h2>Login</h2>
        <form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              required
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn-primary">
              Login
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
