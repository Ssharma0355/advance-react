import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="Navbar-container">
      <Link className="Navbar-Title" to={"/"}>
        Logo
      </Link>
      <Link className="Navbar-Title" to={"/"}>
        Home
      </Link>
      <Link className="Navbar-Title" to={"/aboutus"}>
        About us
      </Link>
      <Link className="Navbar-Title" to={"/contactus"}>
        Contact us
      </Link>
    </div>
  );
}

export default Navbar
