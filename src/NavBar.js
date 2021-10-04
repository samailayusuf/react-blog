import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">  
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
  )
}
