import React from 'react';
import photo from '../photos_et_logos/photo_profile.jpg';
import '../assets/Member.css';

function Member() {
  return (
    <div className='member'>
      <img className='photoProfile' src={photo} alt='photo_de_profil' />
      <h1>Bonjour Marie !</h1>
    </div>
  );
}

export default Member;
