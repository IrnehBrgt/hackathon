import React from 'react'
import RoundTable from '../components/RoundTable';
import SideBar from '../components/Sidebar'
import "../assets/TableRonde.css"

function TableRonde() {
  return (
    <div className="TableRonde">
      <h1>The Table Ronde</h1>
      <SideBar />
      <RoundTable />
    </div>
  );
}

export default TableRonde;
