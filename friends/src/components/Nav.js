import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/friendlist" className="link">Friend List</Link>
      <Link to="/login" className="link">Log in</Link>
      <Link to="/login" className="link" 
        onClick={() => localStorage.clear()}>Log out</Link>
    </div>
  )
}

export default Nav;