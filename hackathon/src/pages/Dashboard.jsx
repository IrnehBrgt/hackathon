import React from 'react';
import Pictos from '../components/Pictos';
import Member from '../components/Member';
import '../assets/Dashboard.css';
import entreprise1 from '../photos_et_logos/entreprise1.png';
import entreprise2 from '../photos_et_logos/entreprise2.png';
import entreprise3 from '../photos_et_logos/entreprise3.png';
import entreprise4 from '../photos_et_logos/entreprise4.png';
import entreprise5 from '../photos_et_logos/entreprise5.png';
import entreprise6 from '../photos_et_logos/entreprise6.png';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div className='dashboard'>
      <header>
        <Pictos />
        <Member />
      </header>
      <Sidebar />
      <div className='informations'>
        <h3>TACHES A TERMINER AUJOURD'HUI</h3>
        <div class='trait'></div>
        <h4 className='applicationName'>APPLICATION EDF</h4>
        <ul className='forToday'>
          <li>Finalisation du login / logout.</li>
          <li>Rajouter une section commentaires sur la page de produit.</li>
        </ul>
        <h3>SPRINT EN COURS</h3>
        <div class='trait'></div>
        <div className='currentSprint'>
          <div className='project'>
            <img className='logo' src={entreprise1} alt='logo_entreprise' />
            <div className='details'>
              <h4>APPLICATION TALENTIS - Fin du sprint prévu le 05/07/2022</h4>
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
              <h4>APPLICATION TIZER - Fin du sprint prévu le 12/07/2022</h4>
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
        <div class='trait'></div>
        <div className='currentProjects'>
          <div className='currentProject'>
            <img className='logo' src={entreprise1} alt='logo_entreprise' />
            <h5>TALENTIS</h5>
          </div>
          <div className='currentProject'>
            <img className='logo' src={entreprise2} alt='logo_entreprise' />
            <h5>TIZER</h5>
          </div>
        </div>
        <h3>MES PROJETS TERMINES</h3>
        <div class='trait'></div>
        <div className='finishedProjects'>
          <div className='finishedProject'>
            <img className='logo' src={entreprise3} alt='logo_entreprise' />
            <h5>KERMS</h5>
          </div>
          <div className='finishedProject'>
            <img className='logo' src={entreprise4} alt='logo_entreprise' />
            <h5>THANOS</h5>
          </div>
          <div className='finishedProject'>
            <img className='logo' src={entreprise5} alt='logo_entreprise' />
            <h5>ANTHEM</h5>
          </div>
          <div className='finishedProject'>
            <img className='logo' src={entreprise6} alt='logo_entreprise' />
            <h5>LEAK 360</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
