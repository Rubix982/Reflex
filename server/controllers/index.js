const { generateAccessToken } = require('../services/auth');
const { checkForFirstLogin } = require('../services/firstLogin');
const { postUserInformationForBio } = require('../services/postFirstLogin');
const { getNavbarInformationFromDatabase } = require('../services/getNavbarInfo');
const { getClassrooms, postClassroom } = require('../services/classrooms');
const { getStudentInformation, postNewStudentRecord } = require('../services/students');
const { savingAttendanceRecord, viewAttendanceForRecord } = require('../services/record');
const { getTeacherRecord, changeTeacherPasword } = require('../services/teacher');

module.exports.loginUser = async (req, res) => {
  try {
    const { token, handle } = await generateAccessToken(req.body);
    res.cookie('access-token', token, { httpOnly: true, sameSite: true });
    const firstLoginStatus = await checkForFirstLogin(handle);
    return res.status(200).json({ msg: 'User logged in!', firstLoginStatus });
  } catch (error) {
    return res.status(401).json({ msg: error.message });
  }
};

module.exports.postFirstLoginInformation = async (req, res) => {
  try {
    await postUserInformationForBio(req.userHandle, req.body.userInformation, req.body.biography);
    return res.status(200).json({ msg: 'Succesfully posted first login information' });
  } catch (error) {
    return res.status(500).json({ msg: `Unable to perform insertion, due to error "${error.message}"` });
  }
};

module.exports.getNavbarInformation = async (req, res) => {
  try {
    const output = await getNavbarInformationFromDatabase(req.userHandle);
    const data = {
      Username: output[0][0].Username,
      ProfilePicture: output[0][0].ProfilePicture,
      Handle: req.userHandle,
    };
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to fetch 
    navbar information due to 
    error "${error.message}"`,
    });
  }
};

module.exports.getClassroomsForTeacher = async (req, res) => {
  try {
    const data = {
      classrooms: await getClassrooms(req.userHandle),
    };
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to fetch 
    classroom results for teacher 
    due to error "${error.message}"`,
    });
  }
};

module.exports.getStudentsForClassroom = async (req, res) => {
  try {
    return res.status(200).send({
      students: await getStudentInformation(req.userHandle, req.params.id),
    });
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to fetch students 
    for classroom with id, ${req.body.classID}, 
    due to error "${error.message}"`,
    });
  }
};

module.exports.postStudentInformation = async (req, res) => {
  try {
    const status = {
      status: await postNewStudentRecord(req.userHandle, req.body.id, req.body.name,
        req.body.image),
    };
    return res.status(200).send(status);
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to post students for 
    classroom with the name, "${req.body.name}", 
    and "${req.body.image}", due to 
    error "${error.message}"`,
    });
  }
};

module.exports.markNewAttendance = async (req, res) => {
  try {
    return res.status(200).send(await savingAttendanceRecord({
      handle: req.userHandle,
      ...req.body.markingInformation,
    }));
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to mark attendance 
    for this classroom at the moment, due 
    to error ${error.message}`,
    });
  }
};

module.exports.viewAttendance = async (req, res) => {
  try {
    return res.status(200).send(await viewAttendanceForRecord({
      handle: req.userHandle,
      classId: req.params.id,
      date: String(req.params.date).split('-').join(' '),
    }));
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to view attendance 
    for this classroom at the moment, due to 
    error ${error.message}`,
    });
  }
};

module.exports.postClassroomInformation = async (req, res) => {
  try {
    return res.status(200).send(await postClassroom({
      ...req.body,
      handle: req.userHandle,
    }));
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to post new classroom
  information at the moment, due to 
  error "${error.message}"`,
    });
  }
};

module.exports.getTeacher = async (req, res) => {
  try {
    return res.status(200).send(await
    getTeacherRecord(req.userHandle));
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to get teacher 
      information at the moment, due
       to error "${error.message}"`,
    });
  }
};

module.exports.changePassword = async (req, res) => {
  try {
    return res.status(200).send(await changeTeacherPasword({
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
      confirmPassword: req.body.confirmPassword,
      handle: req.userHandle,
    }));
  } catch (error) {
    return res.status(500).json({
      msg: `Unable to change the password 
      at the moment, due
       to error "${error.message}"`,
    });
  }
};
