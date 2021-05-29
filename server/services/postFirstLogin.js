const { ValidationSet } = require('../models/validation');
const mysql = require('../db/mysql/connection');

const postUserInformationForBio = async (__handler, __userInformationBlob) => {
  // Let's turn the ValidationSet to true because
  // the first login form has been submitted.

  let result;
  try {
    console.log(`handler is ${__handler}`);
    result = await ValidationSet.findById(__handler);
    result.isFirstLogin = false;

    try {
      await result.save();
    } catch (errorValidtion) {
      throw new Error(`Unable to save fetched Validation Set, due to error ${errorValidtion.message}`);
    }
  } catch (error) {
    throw new Error(`Unable to fetch the relevant validation set record, due to error "${error.message}"`);
  }

  // Insert into MySQL database
  const query = `UPDATE REFLEX.Teacher SET ProfilePicture='${__userInformationBlob.profilePicture}' WHERE Handle='${__handler}'`;
  try {
    await mysql.connection.query(query);
  } catch (errorMySqlConnection) {
    throw new Error(`Unable to insert values into MySQL UserInformation connection, error is "${errorMySqlConnection.message}"`);
  }

  /* eslint-enable no-await-in-loop */
};

module.exports.postUserInformationForBio = postUserInformationForBio;
