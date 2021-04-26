// React additions
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Individual Pages
import Home from './pages/home';
import Feed from './pages/feed';
import Error404 from './pages/error404';
import Post from './pages/post';
import Verify from './pages/Verify';
import Publish from './pages/publish';
import Profile from './pages/profile';
import Search from './pages/search';
import Settings from './pages/Settings';
import SettingsCP from './pages/Settings-changePassword.js';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPassword from './pages/ForgetPassword';
import NewPassword from './pages/NewPassword';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FirstLogin from './pages/FirstLogin';
import PrivacyPolicy from './pages/privacyPolicy';
import Notification from './pages/Notification';
import UserProvider from './components/userDataContext'
import LoginUserProvider from './components/LoginUserContext';

function App() {
  return (
    <>
      <LoginUserProvider>
        <UserProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/feed" >
                <Feed />
              </Route>
              <Route exact path="/profile/:handle" component={Profile} />
              <Route exact path='/notification' component={Notification} />
              <Route exact path="/privacy" component={PrivacyPolicy} />
              <Route exact path="/publish">
                <Publish />
              </Route>
              <Route exact path="/first" >
                <FirstLogin />
              </Route>
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/search/:searchType">
                <Search />
              </Route>
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/changepassword" component={SettingsCP} />
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/verify/:hash" component={Verify}  />
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgetPassword" component={ForgetPassword} />
              <Route exact path="/newPassword/:hashed" component={NewPassword} />              
              <Route component={Error404} />
            </Switch>
          </Router>
        </UserProvider>
      </LoginUserProvider>
    </>
  );
}

export default App;
