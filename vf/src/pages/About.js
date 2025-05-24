import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>About us</h1>
      <button onClick={() => navigate('/')}>Back to homepage</button>
    </div>
  );
}

export default About
