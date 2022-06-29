import React from 'react';
import photo from '../photos_et_logos/photo_profile.jpg';
import Pictos from '../components/Pictos';
import linkedin from '../photos_et_logos/linkedin.png';
import github from '../photos_et_logos/github.png';
import html from '../photos_et_logos/html.png';
import css from '../photos_et_logos/css.png';
import js from '../photos_et_logos/js.png';
import angular from '../photos_et_logos/angular.png';
import nodejs from '../photos_et_logos/nodejs.png';
import python from '../photos_et_logos/python.png';
import mongodb from '../photos_et_logos/mongodb.png';
import mysql from '../photos_et_logos/mysql.png';
import php from '../photos_et_logos/php.png';
import java from '../photos_et_logos/java.png';

function Profile() {
  return (
    <div className='profile'>
      <Pictos />
      <div className='member'>
        <img className='photoProfile' src={photo} alt='photo_de_profil' />
        <h1>Bonjour Marie !</h1>
      </div>
      <h3>MES INFORMATIONS</h3>
      <ul>
        <li>Prénom: Marie</li>
        <li>Nom: MARTIN</li>
        <li>Anniversaire: 06 juillet</li>
        <li>Poste: Développeuse Full-Stack</li>
        <li>Agence: Toulouse</li>
      </ul>
      <ul>
        <li>E-mail: marie.martin@apside.com</li>
        <li>Téléphone: 06 78 90 12 34</li>
        <li>Adresse: 38 rue des rosiers - 31400 Toulouse</li>
        <li>
          <a href='https://www.linkedin.com/marie-martin/'>
            <img src={linkedin} alt='logo_linkedin' />
          </a>
        </li>
        <li>
          <a href='https://github.com/mariemartin'>
            <img src={github} alt='logo_github' />
          </a>
        </li>
      </ul>
      <h3>MA PRESENTATION</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged...
      </p>
      <div className='technos'>
        <h3>MES LANGAGES DE PROGRAMMATION</h3>
        <img src={html} alt='html' />
        <img src={css} alt='css' />
        <img src={js} alt='js' />
        <img src={angular} alt='angular' />
        <img src={nodejs} alt='nodejs' />
        <img src={mysql} alt='mysql' />
        <img src={php} alt='php' />
        <img src={java} alt='java' />
      </div>
      <div className='technos'>
        <h3>LANGAGES EN COURS D'APPRENTISSAGE</h3>
        <img src={python} alt='python' />
        <img src={mongodb} alt='mongodb' />
      </div>
    </div>
  );
}

export default Profile;
