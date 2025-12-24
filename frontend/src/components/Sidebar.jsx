// React :
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

// Styling : 
import "./Sidebar.scss";

// Assets :
import TransactionsIcon from '../assets/Transactions.svg';
import PerformanceIcon from '../assets/Performance.svg';
import DashboardIcon from '../assets/Dashboard.svg';
import SettingsIcon from '../assets/Settings.svg';
import SupportIcon from '../assets/Support.svg';
import Profile from '../assets/pratim2.png';
import NewsIcon from '../assets/News.svg';
import Icon from '../assets/dices.svg';

const Sidebar = () => {
  const [closeMenu, setCloseMenu] = useState(true);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <aside className={
      closeMenu === false
        ? 'sidebar'
        : 'sidebar active'
    }
    >
      <div className={
        closeMenu === false
          ? 'logoContainer'
          : 'logoContainer active'
      }
      >
        <img src={Icon} alt="icon" className="logo" />
        <h2 className="title">Starbucks</h2>
      </div>

      <div className={
        closeMenu === false
          ? 'burgerContainer'
          : 'burgerContainer active'
      }
      >
        <div
          className="burgerTrigger"
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>

        <div className="burgermenu"></div>
      </div>

      <div className={
        closeMenu === false
          ? 'profileContainer'
          : 'profileContainer active'
      }
      >
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hello,Pratim</p>
          <p>pratim04@gmail.com</p>
        </div>
      </div>

      <div className={
        closeMenu === false
          ? 'contentsContainer'
          : 'contentsContainer active'
      }
      >
        <ul>

          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <img src={DashboardIcon} alt="dashboard" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/transactions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <img src={TransactionsIcon} alt="transactions" />
              <span>Transactions</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/performance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <img src={PerformanceIcon} alt="performance" />
              <span>Performance</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/news" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <img src={NewsIcon} alt="news" />
              <span>News</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <img src={SettingsIcon} alt="settings" />
              <span>Settings</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/support" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <img src={SupportIcon} alt="support" />
              <span>Support</span>
            </NavLink>
          </li>

        </ul>

      </div>
    </aside>
  );
}

export default Sidebar;
