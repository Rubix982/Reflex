const { People } = require('../models/people');

const getStudentInformation = async (__handle, __classID) => {
  try {
    return await People.find({ teacher_handler: __handle, course_id: __classID }, '-_id name profilePicture');
  } catch (error) {
    throw new Error(`Unable to search the People set - maybe a connection error? Error thrown is, "${error.message}"`);
  }
};

const postNewStudentRecord = async (__handle, id, name, image) => {
  try {
    const people = new People({
      teacher_handler: __handle, course_id: id, name, profilePicture: image,
    });

    try {
      await people.save();
      return 200;
    } catch (error) {
      throw new Error(`Unable to save People record to MongoDB, due to error --> "${error.message}"`);
    }
  } catch (error) {
    throw new Error(`Unable to post to the People set - maybe a connection error? Error thrown is, "${error.message}"`);
  }
};

module.exports.getStudentInformation = getStudentInformation;
module.exports.postNewStudentRecord = postNewStudentRecord;
