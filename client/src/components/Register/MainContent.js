import React, { useRef } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import ComponentStyling from '../../style/Register/register.module.css';
import { registerUserDetails } from '../../services/register';
require('dotenv').config();

const MainContent = () => {

  const _email = useRef('');
  const _password = useRef('');
  const _cpassword = useRef('');
  const _username = useRef('');
  const _userhandler = useRef('');
  const history = useHistory();

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      await registerUserDetails(
        _email.current.value,
        _password.current.value,
        _cpassword.current.value,
        _username.current.value,
        _userhandler.current.value
      );
      alert(`You've successfully registered!`)
      history.push('/login');
    } catch (error) {
      alert(`Register wasn't able to be completed because of the error "${error.message}"`);
    }
  }

  return (
    <div className={ComponentStyling.content}>
      <div className={ComponentStyling.headings}>
        <h1>Registration</h1>
        <h2>Fill out the the form below to get started.</h2>
      </div>
      <div>
        <form
          action='/login'
          method='POST'
          className={ComponentStyling.registerForm}>
          <input
            type="text"
            ref={_email}
            placeholder="Email Address"
          />
          <input
            type="password"
            ref={_password}
            placeholder="Password" />
          <input
            type="password"
            ref={_cpassword}
            placeholder="Confirm Password"
          />
          <input
            type="text"
            ref={_username}
            placeholder="Username e.g John Doe"
          />
          <input
            type="text"
            ref={_userhandler}
            placeholder="Userhandle e.g johndoe"
          />
          <a href="/login"> Already have an account?</a>
          <br />
          <input
            type="checkbox"
            name="remember-me"
            value="remember-me" />
          <label
            htmlFor="remember-me"
            style={{ fontSize: '16px' }}>
            {' '}
            By signing up, you agree to Terrabuzz&apos;s
            <br />
            Terms, Conditions And Private Policies
          </label>
          <br />
          <input
            className={ComponentStyling.registerButton}
            type="Submit"
            value="Register"
            onClick={registerUser}
            readOnly
          />
          <Link to='/login'>
            <input
              className={ComponentStyling.login}
              type="button"
              value="Login"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default MainContent;