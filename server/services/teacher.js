const mysql = require('../db/mysql/connection');

const getTeacherRecord = async (__handle) => {
  try {
    const query = `SELECT UserName, Biography, ProfilePicture from REFLEX.Teacher WHERE Handle="${__handle}"`;

    const output = await mysql.connection.query(query);

    return output[0][0];
  } catch (error) {
    throw new Error(`Unable to search the Teacher record - maybe a connection error? Error thrown is, ${error.message}`);
  }
};

module.exports.getTeacherRecord = getTeacherRecord;
