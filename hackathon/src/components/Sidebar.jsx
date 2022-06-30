import React from 'react';
import { Link } from "react-router-dom";
import '../assets/Sidebar.css';
import { Sidebardata } from './Sidebardata.js';
import logo from "../Img/logo.jpeg"

function Sidebar() {
  return <div className='sidebar'>
    <img src={logo} alt="logo" className='logoApside'/> 
  {Sidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
  </div>
}

export default Sidebar;
