import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/icon/Logo.svg';
import ComponentStyling from '../style/NavbarLoggedOut.module.css';
import { CenterAlign, RightAlign } from './FlexAlignment';

const NavbarLoggedOut = () => (
  <div className={ComponentStyling.navbar}>
    <div className={ComponentStyling.leftContent}>
      <RightAlign>
        <div className={ComponentStyling.logo}>
          <img className="logo" src={Logo} alt="" />
        </div>
      </RightAlign>
      <div className={ComponentStyling.title}>
        <Link to="/">
          <h1>Terrabuzz</h1>
        </Link>
      </div>
    </div>
    <div className={ComponentStyling.rightContent}>
      <CenterAlign style={{ alignItems: 'flex-end' }}>
        <div className={ComponentStyling.loginButton}>
          <Link to="/login">Login</Link>
        </div>
      </CenterAlign>
      <CenterAlign style={{ alignItems: 'flex-end' }}>
        <div className={ComponentStyling.registerButton}>
          <Link to="/register">Register</Link>
        </div>
      </CenterAlign>
    </div>
  </div>
);
export default NavbarLoggedOut;
