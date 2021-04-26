const express = require('express');
const { authorizeUser } = require('../middleware/index.js');

const Router = express.Router();
const indexContoller = require('../controllers/index.js');

Router.get('/', indexContoller.getHomePage);
Router.get('/settings', authorizeUser, indexContoller.getSettings);
Router.get('/newPassword/:hashed', indexContoller.newPassword);
Router.post('/logout', authorizeUser, indexContoller.logoutUser);
Router.post('/newPassword/:hashed', indexContoller.resetPassword);
Router.post('/forget-password', indexContoller.forgetPassword);
Router.post('/settings', authorizeUser, indexContoller.updateSettings);
Router.post('/login', indexContoller.loginUser);
Router.post('/register', indexContoller.registerUser);
Router.post('/firstLogin', authorizeUser, indexContoller.postFirstLoginInformation);
Router.post('/changepassword', authorizeUser, indexContoller.changePassword);
Router.post('/verify', indexContoller.verifyUser);

module.exports = Router;
