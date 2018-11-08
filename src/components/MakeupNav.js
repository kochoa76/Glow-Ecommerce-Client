import React from 'react';
import { NavLink } from 'react-router-dom';

const MakeupNav = () => {
    return (
        <div className="nav">
          <div className="nav-title">
            My Logo
          </div>
          <div className="top-round-rainbow">
          </div>
          <div className="nav-links">
            <ul>
              <li><NavLink to="/About"> About </NavLink></li>
              <li><NavLink to="/Makeup"> Makeup </NavLink></li>
              <li><NavLink to="/Media"> In the Media </NavLink></li>
            </ul>
          </div>
        </div>
    )
  }


export default MakeupNav
