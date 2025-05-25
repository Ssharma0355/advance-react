import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      navigate("/"); // user already logged in → redirect to home
    }
  }, [navigate]);

  return (
    <div>
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
