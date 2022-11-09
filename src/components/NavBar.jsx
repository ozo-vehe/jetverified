import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/Vector.png'
import avatar from '../assets/avatar.png'

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-image">
        <img src={logo} alt="logo"/>
      </div>

      <div className="nav-links">
        <ul>
          {loggedIn ? (
            <>
              <Link to={'jetverify/document'}>My Documents</Link>
              <Link to={'jetverify/history'}>History</Link>
              <img src={avatar} alt="User Avatar" />
            </>
          ):(
            <>
              <Link to={'jetverify/login'}>Login</Link>
              <Link className='signup' to={'jetverify/signup'}>Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar