const express = require('express');
const indexContoller = require('../controllers/index');
const { authorizeUser } = require('../middleware/index');

const Router = express.Router();

Router.post('/login', indexContoller.loginUser);
Router.post('/first', authorizeUser, indexContoller.postFirstLoginInformation);
Router.post('/people', authorizeUser, indexContoller.postStudentInformation);
Router.post('/attendance', authorizeUser, indexContoller.markNewAttendance);
Router.get('/navbar', authorizeUser, indexContoller.getNavbarInformation);
Router.get('/classrooms', authorizeUser, indexContoller.getClassroomsForTeacher);
Router.get('/people/:id', authorizeUser, indexContoller.getStudentsForClassroom);

module.exports = Router;
