const bcrypt = require('bcrypt');
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

const changeTeacherPasword = async ({
  oldPassword, newPassword, confirmPassword, handle,
}) => {
  if (!oldPassword || !newPassword
    || !confirmPassword || !handle) {
    throw new Error('Required fields cannot be empty');
  }

  try {
    if (newPassword === confirmPassword) {
      const passwordQuery = `SELECT Password FROM REFLEX.Teacher WHERE Handle='${handle}';`;

      let queryPassword;
      let isMatched;

      try {
        [[queryPassword]] = await mysql.connection.query(passwordQuery);
      } catch (error) {
        throw new Error(`MySQL unable to run to fetch password, due to "${error.message}"`);
      }

      const databaseHashedPassword = queryPassword;

      try {
        isMatched = await bcrypt.compare(oldPassword, databaseHashedPassword.Password);
      } catch (error) {
        throw new Error('Bad Request In Comparing');
      }

      if (isMatched) {
        const salt = await bcrypt.genSalt(10);
        const newhashedPassword = await bcrypt.hash(newPassword, salt);
        const updateQuery = `UPDATE REFLEX.Teacher SET Password='${newhashedPassword}'
                    WHERE Handle='${handle}';`;
        try {
          await mysql.connection.query(updateQuery);
        } catch (error) {
          throw new Error(`Unable to update password with MySQL query, ${error.message}`);
        }
      } else {
        throw new Error('Given password and database password do not match');
      }

      return { msg: 'Password changed successfully!' };
    }
    throw new Error('Password And Confirm Password Does Not Match');
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports.changeTeacherPasword = changeTeacherPasword;
module.exports.getTeacherRecord = getTeacherRecord;
