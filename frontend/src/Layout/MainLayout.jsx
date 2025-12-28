import React from 'react'
import "./MainLayout.scss";
import NavBar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
      <div className="layout">
        <div className="SideBar-Layout" ><SideBar/></div>
        <div className="TopBar-Layout"><NavBar/></div>
        <div className="Content-Layout" ><Outlet/></div>
      </div>
  );
};

export default MainLayout