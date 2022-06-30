import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../photos_et_logos/photo_profile.jpg';
import Pictos from '../components/Pictos';
import Member from '../components/Member';
import Sidebar from '../components/Sidebar';
import tchat from '../photos_et_logos/tchat.png';
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
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='profileContents'>
        <header>
          <Pictos />
          <Member />
        </header>
        <div className='informations'>
          <h3>MES INFORMATIONS</h3>
          <div class='trait'></div>
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
          <br></br>
          <div className='logos'>
            <NavLink to='/profile/chat'>
              <img className='logo' src={tchat} alt='logo_tchat' />
            </NavLink>
            <a href='https://www.linkedin.com/'>
              <img className='logo' src={linkedin} alt='logo_linkedin' />
            </a>
            <a href='https://github.com/'>
              <img className='logo' src={github} alt='logo_github' />
            </a>
            <img className='logo' src={plus} alt='logo_+' />
          </div>
          <h3>MA PRESENTATION</h3>
          <div class='trait'></div>
          <p className='bio'>
            J'ai rejoint Apside suite à une formation web de 5 mois, je suis
            donc une développeuse junior, cependant Apside m'a accordé sa
            confiance. J’ai pu rejoindre une entreprise où il fait bon vivre
            avec de nombreuses activités organisées en collaboration avec le CE
            (par exemple de l'escalade, du badminton, du soccer...). De plus, il
            m’a été donné la possibilité d’accéder à des formations en interne
            très vite, ce qui m'a permis de prendre confiance en moi et
            d'augmenter mon panel de compétences. J'ai rencontré une équipe très
            à l'écoute de ses collaborateurs et je suis très contente de la
            première mission sur laquelle j'ai été envoyée: challengeante mais
            qui respectait très bien mes envies et choix de technologies.
          </p>
          <h3>MES LANGAGES DE PROGRAMMATION</h3>
          <div class='trait'></div>
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
          <div class='trait'></div>
          <div className='technos2'>
            <img className='techno' src={python} alt='python' />
            <img className='techno' src={mongodb} alt='mongodb' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
