import React, { useState } from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
      <div className="Header-container">
        <header className="header">
          <div className="header-content">
            <div className="logo">HELLO JEJU</div>
            <div className="menu-icon" onClick={toggleSidebar}>☰</div>
          </div>
        </header>

        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={toggleSidebar}>✖</div>
          <ul className="menu-lists">
            <li className="menu"><Link to={'#'} className="link">예약</Link></li>
            <li className="menu"><Link to={'#'} className="link">도시별 여행정보</Link></li>
            <li className="menu"><Link to={'#'} className="link">일정</Link></li>
            <li className="menu"><Link to={'#'} className="link">로그인</Link></li>
          </ul>
        </div>
      </div>
  );
}

export default Header;