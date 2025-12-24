import React from 'react'
import "./MainLayout.scss";
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <>
      <div className="layout">
        <div className="TopBar"><NavBar /></div>
        <div className="SideBar"><Sidebar /></div>
        <div className="Content"><Outlet /></div>
      </div>
    </>
  );
};

export default MainLayout
