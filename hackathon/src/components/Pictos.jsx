import React from 'react';
import edit from '../photos_et_logos/edit.png';
import settings from '../photos_et_logos/settings.png';
import disconnect from '../photos_et_logos/disconnect.png';

function Pictos() {
  return (
    <div className='pictos'>
      <img src={edit} alt='logo_editer' />
      <img src={settings} alt='logo_paramètres' />
      <img src={disconnect} alt='logo_déconnexion' />
    </div>
  );
}

export default Pictos;
