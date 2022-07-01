import React from 'react';
import { BsTag } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

import '../assets/ProjectCard.css';

function ProjectCard(props) {
  const { title, descriptions, image } = props;
  return (
    <div className='ProjectCard'>
      <img src={image} alt='coucou' />
      <h1>{title}</h1>
      <p className='ProjectTxt'>{descriptions}</p>
      <div className='Txt'>
        <h3 className='ProjectTxt'>status: En cours</h3>
        <h3 className='ProjectTxt'>Participants</h3>
        <p><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /></p>
        <h3 className='ProjectTxt'>Categories</h3>
        <button> <BsTag /> Automobile</button>
        <button> <BsTag /> Apside Toulouse</button>
      </div>
    </div>
  );
}

export default ProjectCard;