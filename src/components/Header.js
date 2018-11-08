import React from 'react';
import { Link } from 'react-router-dom';

   const Header = () => (
     <header>
      <div className="nav">
        <div className="nav-title">
          Only Good.
        </div>
        <div className="top-round-rainbow">
        </div>
        <div className="nav-links">
        <ul>
          <li><Link to="/About"> About </Link></li>
          <li><Link to="/Makeup"> Makeup </Link></li>
          <li><Link to="/Media"> In the Media </Link></li>
        </ul>
        </div>
      </div>
     </header>
   )


export default Header
