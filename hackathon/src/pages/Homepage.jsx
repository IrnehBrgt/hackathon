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
        <h1>Bienvenue sur Inside-Apside</h1>
        <p className='aLaUneTitle'>Quoi de neuf chez Apside ?</p>
        <div className='boxAlaUne'>
          <h2 className='projectOfTheMonth'>Le projet du mois</h2>
        </div>
        <div className='boxThree'>
          <div className='topics'>
            <h4>Les projets</h4>
            <div className='boxcolor' id='boxProjets'></div>
          </div>
          <div className='topics'>
            <h4 className='withoutUnderline'>L'Apsidien du mois</h4>
            <div className='boxcolor' id='boxApsidien'></div>
          </div>
          <NavLink to='/tableRonde'>
            <div className='topics'>
              <h4>La communaut√© des Apsidiens</h4>
              <div className='boxcolor' id='boxCom'></div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
