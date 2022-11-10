import { useState } from 'react';
import { Link, useHref } from 'react-router-dom'
import logo from '../assets/Vector.png'
import avatar from '../assets/avatar.png'

function NavBar() {
  const params = useHref()
  return (
    <div className="navbar">
      <div className="nav-image">
        <img src={logo} alt="logo"/>
      </div>

      <div className="nav-links">
        <ul>
          {params.includes("dashboard") ? (
            <>
              <Link to={'jetverify/document'}>My Documents</Link>
              <Link to={'jetverify/history'}>History</Link>
              <img src={avatar} alt="User Avatar" />
            </>
          ):(
            <>
              <Link to={'/login'}>Login</Link>
              <Link className='/signup' to={'/signup'}>Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar