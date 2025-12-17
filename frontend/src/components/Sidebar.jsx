import React from 'react'
import "./Sidebar.scss";
import Icon from '../assets/dices.svg';
import Profile from '../assets/profile.png';

import DashboardIcon from '../assets/Dashboard.svg';
import TransactionsIcon from '../assets/Transactions.svg';
import PerformanceIcon from '../assets/Performance.svg';
import NewsIcon from '../assets/News.svg';
import SettingsIcon from '../assets/Settings.svg';
import SupportIcon from '../assets/Support.svg';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logoContainer'>
        <img src={Icon} alt="icon" className="logo" />
        <h2 className="title">Starbucks</h2>
      </div>
      <div className="burgerContainer">
        <div className="burgerTrigger"></div>
        <div className="burgermenu"></div>
      </div>
      <div className="profileContainer">
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContents">
          <p className="name">Hello, John ✨</p>
          <p>jonhsmith@gmail.com</p>
        </div>
      </div>
      <div className="contentsContainer">
        <ul>
          <li className='active'>
            <img src={DashboardIcon} alt="dashboard" />
            <a href="/">Dashboard</a>
          </li>
          <li>
            <img src={TransactionsIcon} alt="transactions" />
            <a href="/transactions">transactions</a>
          </li>
          <li>
            <img src={PerformanceIcon} alt="performance" />
            <a href="/performance">performance</a>
          </li>
          <li>
            <img src={NewsIcon} alt="News" />
            <a href="/news">news</a>
          </li>
          <li>
            <img src={SettingsIcon} alt="Settings" />
            <a href="/Settings">Settings</a>
          </li>
          <li>
            <img src={SupportIcon} alt="Support" />
            <a href="/Support">Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
