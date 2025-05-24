import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonReuse from '../Components/Widgets/ButtonReuse';

function About() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>About us</h1>
      <button onClick={() => navigate('/')}>Back to homepage</button>
      <ButtonReuse name={"About us page"} />
    </div>
  );
}

export default About
