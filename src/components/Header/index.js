import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import './index.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setMenuVisible(!menuVisible); // Toggle the menu visibility
  };

  return (
    <>
      {/* below the code block is show large devices */}
      <div className='header-background-larg'>
        <h1 className='header-logo'><span className='k'>K</span><span className='I'>I</span><span className='k'>K</span><span>I</span></h1>
        <ul className='header-links'>
          <Link to='/home' className='nav-links'>
            <li>HOME</li>
          </Link>
          <Link to='/profile' className='nav-links'>
            <li>PROFILE</li>
          </Link>
          <Link to='/bookpage' className='nav-links'>
            <li>BOOKINGS</li>
          </Link>
          <Link to='/' className='nav-links'>
            <li>LOGIN</li>
          </Link>
        </ul>
      </div>  

      {/* below the code block is show small devices */}
      <div className="header-background-small">
        <div className="logo-card">
        <h1 className='header-logo'><span className='k'>K</span><span className='I'>I</span><span className='k'>K</span><span className='I'>I</span></h1>
          <div onClick={handleClick}>
            <AiOutlineMenu style={{ height: '30px', width: '30px', marginRight: '30px' }} />
          </div>
        </div>
        {menuVisible && (
          <ul className="header-links-sm">
            <Link to="/home" className="nav-links-sm">
              <li>HOME</li>
            </Link>
            <Link to="/profile" className="nav-links-sm">
              <li>PROFILE</li>
            </Link>
            <Link to="/bookpage" className="nav-links-sm">
              <li>BOOKINGS</li>
            </Link>
            <Link to="/" className="nav-links-sm">
              <li>LOGIN</li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
