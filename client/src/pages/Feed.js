import React, { useContext } from 'react';
import Container from '../components/FullViewContainer';
import MainContent from '../components/Feed/MainContent';
import { loginUserContext } from '../components/LoginUserContext';
// the div is for navbar
import Navbar from '../components/Navbar';
import Home from './Home';
import FirstLogin from './FirstLogin';

const Feed = () => {
  const { login, firstLogin, verified } = useContext(loginUserContext);
  
  if (firstLogin.state) {
    return (<FirstLogin />);
  }
  
  if (login.state) {
    return (
      <Container
        style={{
          backgroundColor: '#18191a',
          display: 'grid',
          gridTemplateRows: '10% 90%',
        }}
      >
        <Navbar/>
        <MainContent />
      </Container>
    )
  }

  return (<Home />);
};

export default Feed;
