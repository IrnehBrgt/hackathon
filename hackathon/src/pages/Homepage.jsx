import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/Homepage.css';
import Sidebar from '../components/Sidebar';
import '../assets/Homepage.css';

function Homepage() {
  return (
    <div className='boxHome'>
      <div className='boxSideBar'>
        <Sidebar />
      </div>
      <div className='boxPage'>
        <h1 className='titleWelcome'>Bienvenue sur INSIDE-APSIDE</h1>
        <p className='aLaUneTitle'>A la une</p>
        <div className='boxAlaUne'>
          <h2>Inside Apside</h2>
          <h2>Le projet du mois</h2>
        </div>
        <div className='boxThree'>
          <div className='boxcolor' id='boxProjets'>
            Les projets
          </div>
          <div className='boxcolor' id='boxApsidien'>
            L'Apsidien du mois
          </div>
          <NavLink to='/tableRonde'>
            <div className='boxcolor' id='boxCom'>
              La communauté des Apsidiens
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
