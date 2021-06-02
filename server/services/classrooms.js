const mysql = require('../db/mysql/connection');

const getClassrooms = async (__handler) => {
  try {
    const query = `SELECT _id, Description, Name, Created, DisplayPicture FROM REFLEX.Course WHERE Teacher_Handle='${__handler}';`;
    const output = await mysql.connection.query(query);

    const result = [];

    output[0].forEach((entry) => {
      result.push({
        _id: entry._id,
        description: entry.Description,
        name: entry.Name,
        displayPicture: entry.DisplayPicture,
        created: entry.Created,
      });
    });

    return result;
  } catch (error) {
    throw new Error(`Unable to search for classrooms for the 
    given user "${__handler}" - maybe due to a connection 
    error? Error thrown is, "${error.message}".`);
  }
};

const postClassroom = async ({
  handle, name, description, image,
}) => {
  try {
    const query = `INSERT INTO Course(Teacher_Handle, Description, Name, DisplayPicture) VALUES("${handle}", "${description}", "${name}", "${image}" ) `;

    try {
      await mysql.connection.query(query);
    } catch (error) {
      throw new Error(`Unable to insert a new classroom into 
      the MySQL database for the given user, "${handle}" 
      due to error "${error.message}" - try again?`);
    }
    return { msg: 'Success!' };
  } catch (error) {
    throw new Error(`Unable to add a new classroom for the given user "${handle}" - maybe due to an error connection? Error thrown is, "${error.message}"`);
  }
};

module.exports.postClassroom = postClassroom;
module.exports.getClassrooms = getClassrooms;
