import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/Homepage.css";

function Homepage() {
  return (
    <div>
      <h1>Welcome on INSIDE-ABSIDE ! </h1>
      <button type='button' className='forum-button'>
          <NavLink className='details' to='/forum'>
            Forum
          </NavLink>
        </button>
    </div>
  )
}

export default Homepage