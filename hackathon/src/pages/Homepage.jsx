import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/Homepage.css";
import Sidebar from '../components/Sidebar';

function Homepage() {
  return (
    <div>
      <Sidebar />
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