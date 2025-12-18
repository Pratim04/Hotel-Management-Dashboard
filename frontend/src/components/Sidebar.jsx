import React, { useState } from 'react'
// Styling : 
import "./Sidebar.scss";
// Assets :
import TransactionsIcon from '../assets/Transactions.svg';
import PerformanceIcon from '../assets/Performance.svg';
import DashboardIcon from '../assets/Dashboard.svg';
import SettingsIcon from '../assets/Settings.svg';
import SupportIcon from '../assets/Support.svg';
import Profile from '../assets/profile.png';
import NewsIcon from '../assets/News.svg';
import Icon from '../assets/dices.svg';

import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(true);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={closeMenu === false ? 'sidebar' : 'sidebar active'}>
      <div className={
        closeMenu === false ?
          'logoContainer'
          : 'logoContainer active'
      }
      >
        <img src={Icon} alt="icon" className="logo" />
        <h2 className="title">Starbucks</h2>
      </div>
      <div className={
        closeMenu === false ?
          'burgerContainer'
          : 'burgerContainer active'
      }>
        <div
          className="burgerTrigger"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className="burgermenu"></div>
      </div>
      <div className={
        closeMenu === false ?
          'profileContainer'
          : 'profileContainer active'
      }>
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hello, Pratim ✨</p>
          <p>pratim04@gmail.com</p>
        </div>
      </div>
      <div className={
        closeMenu === false ?
          'contentsContainer'
          : 'contentsContainer active'
      }>
        <ul>
          <li className={location.pathname === "/" ? 'active' : ""}>
            <img src={DashboardIcon} alt="dashboard" />
            <a href="/">Dashboard</a>
          </li>
          <li className={location.pathname === "/transactions" ? 'active' : ""}>
            <img src={TransactionsIcon} alt="transactions" />
            <a href="/transactions">transactions</a>
          </li>
          <li className={location.pathname === "/performance" ? 'active' : ""}>
            <img src={PerformanceIcon} alt="performance" />
            <a href="/performance">performance</a>
          </li>
          <li className={location.pathname === "/News" ? 'active' : ""}>
            <img src={NewsIcon} alt="News" />
            <a href="/news">news</a>
          </li>
          <li className={location.pathname === "/Settings" ? 'active' : ""}>
            <img src={SettingsIcon} alt="Settings" />
            <a href="/Settings">Settings</a>
          </li>
          <li className={location.pathname === "/Support" ? 'active' : ""}>
            <img src={SupportIcon} alt="Support" />
            <a href="/Support">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
