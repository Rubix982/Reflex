// React additions
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Main Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Verify from './pages/Verify';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Register from './pages/Register';
import FirstLogin from './pages/FirstLogin';
import NewPassword from './pages/NewPassword';
import ForgetPassword from './pages/ForgetPassword';

// Data Context
import UserProvider from './components/userDataContext'
import LoginUserProvider from './components/LoginUserContext';

function App() {
  return (
    <>
      <LoginUserProvider>
        <UserProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/verify' component={Verify} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/first' component={FirstLogin} />
              <Route exact path='/forget' component={ForgetPassword} />
              <Route exact path='/about' component={AboutUs} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/new/:hashed' component={NewPassword} />
              <Route component={Error404} />
            </Switch>
          </Router>
        </UserProvider>
      </LoginUserProvider>
    </>
  );
}

export default App;
