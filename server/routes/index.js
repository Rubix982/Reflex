const express = require('express');
const indexContoller = require('../controllers/index');
const { authorizeUser } = require('../middleware/index');

const Router = express.Router();

Router.post('/login', indexContoller.loginUser);
Router.post('/first', authorizeUser, indexContoller.postFirstLoginInformation);
Router.get('/navbar', authorizeUser, indexContoller.getNavbarInformation);

module.exports = Router;
