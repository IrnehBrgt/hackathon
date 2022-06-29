import React from 'react';
import '../assets/Topic.css';
import { NavLink } from 'react-router-dom';
import ContentOfTopic from './ContentOfTopic';

function Topic() {
  return (
    <div className='Topic'>
      <div className='one-topic'>
        <h3>{ContentOfTopic[0].title}</h3>
        <p>{ContentOfTopic[0].text}</p>
        <button type='button' className='comment-button'>
          <NavLink className='details' to='/forum/details'>
            See the full discussion about it !
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Topic;
