const mysql = require('../db/mysql/connection');

const getClassroomInformation = async (__handler) => {
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
    throw new Error(`Unable to search for classrooms for the given user "${__handler}" - maybe due to a connection error? Error thrown is, "${error.message}".`);
  }
};

module.exports.getClassroomInformation = getClassroomInformation;
