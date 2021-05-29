const express = require('express');
const indexContoller = require('../controllers/index');

const Router = express.Router();

Router.post('/login', indexContoller.loginUser);

module.exports = Router;
