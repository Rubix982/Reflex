const mysql = require('../db/mysql/connection');

const getNavbarInformationFromDatabase = async (__userHandle) => {
  try {
    const query = `SELECT Username, ProfilePicture FROM REFLEX.Teacher WHERE Handle='${__userHandle}';`;
    const output = await mysql.connection.query(query);
    return output;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.getNavbarInformationFromDatabase = getNavbarInformationFromDatabase;
