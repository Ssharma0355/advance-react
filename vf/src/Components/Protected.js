import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  return children;
}

export default Protected;
