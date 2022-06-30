import React from 'react';
import edit from '../photos_et_logos/edit.png';
import settings from '../photos_et_logos/settings.png';
import disconnect from '../photos_et_logos/disconnect.png';
import '../assets/Pictos.css';

function Pictos() {
  return (
    <div className='pictos'>
      <img className='picto' src={edit} alt='logo_editer' />
      <img className='picto' src={settings} alt='logo_paramètres' />
      <img className='picto' src={disconnect} alt='logo_déconnexion' />
    </div>
  );
}

export default Pictos;
