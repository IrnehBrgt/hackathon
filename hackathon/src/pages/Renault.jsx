import { React } from 'react';
import ProjectCard from '../components/ProjectCard';
import image from '../photos_et_logos/renault.jpeg';
import Sidebar from '../components/Sidebar';
import '../assets/Renault.css'

function Renault() {
  return (
    <div className='Renault'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='body'>
      <ProjectCard
        title={'Renault'}
        descriptions={
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nam vel eum dolorum illo nihil impedit at! Rerum, officiis facilis hic mollitia assumenda itaque consectetur dolore ducimus quae ut exercitationem quasi corrupti explicabo similique nulla ad iste error vitae veritatis consequatur fugiat impedit deleniti pariatur aperiam? Deserunt consequatur optio animi!'
        }
        image={image}
      />
      </div>
    </div>
  );
}

export default Renault;
