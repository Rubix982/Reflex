// React additions
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Main Pages
import Home from './pages/Home';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import FirstLogin from './pages/FirstLogin';

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
              <Route exact path='/feed' component={Feed} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/first' component={FirstLogin} />
              <Route component={Error404} />
            </Switch>
          </Router>
        </UserProvider>
      </LoginUserProvider>
    </>
  );
}

export default App;
