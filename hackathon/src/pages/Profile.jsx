import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../photos_et_logos/photo_profile.jpg';
import Pictos from '../components/Pictos';
import linkedin from '../photos_et_logos/linkedin.png';
import github from '../photos_et_logos/github.png';
import plus from '../photos_et_logos/plus.png';
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
import '../assets/Profile.css';

function Profile() {
  return (
    <div className='profile'>
      <header>
        <Pictos />
        <div className='member'>
          <img className='photoProfile' src={photo} alt='photo_de_profil' />
          <h1>Bonjour Marie !</h1>
        </div>
      </header>
      <div className='informations'>
        <h3>MES INFORMATIONS</h3>
        <div className='infos'>
          <ul>
            <li>
              <strong>Prénom:</strong> Marie
            </li>
            <li>
              <strong>Nom:</strong> MARTIN
            </li>
            <li>
              <strong>Poste:</strong> Développeuse Full-Stack
            </li>
            <li>
              <strong>Agence:</strong> Toulouse
            </li>
          </ul>
          <ul>
            <li>
              <strong>Anniversaire:</strong> 06 juillet
            </li>
            <li>
              <strong>E-mail:</strong> marie.martin@apside.com
            </li>
            <li>
              <strong>Téléphone:</strong> 06 78 90 12 34
            </li>
            <li>
              <strong>Adresse:</strong> 38 rue des rosiers - 31400 Toulouse
            </li>
          </ul>
        </div>
        <div className='logos'>
          <li>
            <a href='https://www.linkedin.com/marie-martin/'>
              <img className='logo' src={linkedin} alt='logo_linkedin' />
            </a>
          </li>
          <li>
            <a href='https://github.com/mariemartin'>
              <img className='logo' src={github} alt='logo_github' />
            </a>
          </li>
          <li>
            <img className='logo' src={plus} alt='logo_+' />
          </li>
          <li>
            <NavLink to='/profile/chat'>
              <p>Ma messagerie</p>
            </NavLink>
          </li>
        </div>
        <h3>MA PRESENTATION</h3>
        <p className='bio'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged...
        </p>
        <h3>MES LANGAGES DE PROGRAMMATION</h3>
        <div className='technos'>
          <img className='techno' src={html} alt='html' />
          <img className='techno' src={css} alt='css' />
          <img className='techno' src={js} alt='js' />
          <img className='techno' src={angular} alt='angular' />
          <img className='techno' src={nodejs} alt='nodejs' />
          <img className='techno' src={mysql} alt='mysql' />
          <img className='techno' src={php} alt='php' />
          <img className='techno' src={java} alt='java' />
        </div>
        <h3>LANGAGES EN COURS D'APPRENTISSAGE</h3>
        <div className='technos2'>
          <img className='techno' src={python} alt='python' />
          <img className='techno' src={mongodb} alt='mongodb' />
        </div>
      </div>
    </div>
  );
}

export default Profile;
