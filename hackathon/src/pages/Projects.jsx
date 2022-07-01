import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import List from '../components/List';
import ProjectCard from '../components/ProjectCard';
import image from '../photos_et_logos/renault.jpeg';
import Sidebar from '../components/Sidebar';
import '../assets/Projects.css';

function Projects() {
  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='body'>
        <div className='search'>
          <TextField
            id='outlined-basic'
            onChange={inputHandler}
            variant='outlined'
            fullWidth
            label='Trouver un projet...'
          />
        </div>
        <Link style={{ textDecoration: 'none', color: 'black' }} to='/Projects/renault'>
          <ProjectCard
            title={'Renault'}
            descriptions={
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nam vel eum dolorum illo nihil impedit at! Rerum, officiis facilis hic mollitia assumenda itaque consectetur dolore ducimus quae ut exercitationem quasi corrupti explicabo similique nulla ad iste error vitae veritatis consequatur fugiat impedit deleniti pariatur aperiam? Deserunt consequatur optio animi!'
            }
            image={image}
          />
        </Link>
        <List input={inputText} />
      </div>
    </div>
  );
}

export default Projects;
