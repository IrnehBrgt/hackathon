import { React } from 'react';
import image from '../photos_et_logos/renault.jpeg';
import Sidebar from '../components/Sidebar';
import { BsTag, BsChat } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import '../assets/Renault.css'

function Renault() {
  return (
    <div className='Renault'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='ProjectCard'>
      <img src={image} alt='coucou' />
      <h1>{'Renault'}</h1>
      <p className='ProjectTxt'>{  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nam vel eum dolorum illo nihil impedit at! Rerum, officiis facilis hic mollitia assumenda itaque consectetur dolore ducimus quae ut exercitationem quasi corrupti explicabo similique nulla ad iste error vitae veritatis consequatur fugiat impedit deleniti pariatur aperiam? Deserunt consequatur optio animi!'
}</p>
      <div className='Txt'>
        <h3 className='ProjectTxt'>status: En cours</h3>
        <h3 className='ProjectTxt'>Participants</h3>
        <p><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /><FaUserCircle /></p>
        <h3 className='ProjectTxt'>Categories</h3>
        <button> <BsTag /> Automobile</button>
        <button> <BsTag /> Apside Toulouse</button>
      </div>
      <button className='Contact'> <BsChat /> Contact</button>
    </div>
    </div>
  );
}

export default Renault;