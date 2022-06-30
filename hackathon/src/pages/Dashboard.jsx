import React from 'react';
import Pictos from '../components/Pictos';
import Member from '../components/Member';
import '../assets/Dashboard.css';
import entreprise1 from '../photos_et_logos/entreprise1.png';
import entreprise2 from '../photos_et_logos/entreprise2.png';

function Dashboard() {
  return (
    <div className='dashboard'>
      <header>
        <Pictos />
        <Member />
      </header>
      <div className='informations'>
        <h3>TACHES A TERMINER AUJOURD'HUI</h3>
        <h4 className='applicationName'>APPLICATION EDF</h4>
        <ul className='forToday'>
          <li>Finalisation du login / logout.</li>
          <li>Rajouter une section commentaires sur la page de produit.</li>
        </ul>
        <h3>SPRINT EN COURS</h3>
        <div className='currentSprint'>
          <div className='project'>
            <img className='logo' src={entreprise1} alt='logo_entreprise' />
            <div className='details'>
              <h4>APPLICATION TALENTIS - Fin du sprint prévue le 05/07/2022</h4>
              <div className='tasks'>
                <li>Finalisation du login / logout.</li>
                <li>
                  Rajouter une section commentaires sur la page de produit.
                </li>
              </div>
            </div>
          </div>
          <div className='project'>
            <img className='logo' src={entreprise2} alt='logo_entreprise' />
            <div className='details'>
              <h4>APPLICATION TIZER - Fin du sprint prévue le 12/07/2022</h4>
              <div className='tasks'>
                <li>
                  Création de la fonctionnalité "tchat avec un conseiller".
                </li>
                <li>Possibilité d'exporter des données au format CSV.</li>
              </div>
            </div>
          </div>
        </div>
        <h3>MES PROJETS EN COURS</h3>
        <h3>MES PROJETS TERMINES</h3>
      </div>
    </div>
  );
}

export default Dashboard;
