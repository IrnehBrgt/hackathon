import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Homepage.css';

function Homepage() {
  return (
    <div>
      <h1>welcome on INSIDE-ABSIDE ! </h1>
      <button type='button' className='RoundTable-button'>
          <NavLink className='details' to='/tableRonde'>
            Table Ronde
          </NavLink>
        </button>
    </div>
  );
}

export default Homepage;
