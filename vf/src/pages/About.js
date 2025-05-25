import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonReuse from '../Components/Widgets/ButtonReuse';

function About() {
    const navigate = useNavigate();
    const people = [
      {
        name: "Sachin",
        email: "ssaharar",
        id: 1,
      },
      {
        name: "Sachin",
        email: "ssaharar",
        id: 1,
      },

      {
        name: "sharma",
        email: "ssaharar",
        id: 1,
      },
      {
        name: "sasasas",
        email: "ssaharar",
        id: 1,
      },
    ];
  return (
    <div>
      <h1>About us</h1>
      <button onClick={() => navigate('/')}>Back to homepage</button>
      <ul>
            {people.map(t=>(
                <li>{t.name}</li>

      ))}

      </ul>
  
      <ButtonReuse name={"About us page"} />
    </div>
  );
}

export default About
