const path = require('path');
const fs = require('fs');
const MYSQL_CONNECTOR = (require('./connection'));

const createAndInsert = async () => {
  let script = fs.readFileSync(path.join(__dirname, './create.sql')).toString();
  try {
    await MYSQL_CONNECTOR.connection.query(script);
    console.log('REFLEX Database Created Successfully for MySQL');
  } catch (error) {
    console.log(`REFLEX Database not executed successfully for MySQL because --> ${error.message}`);
  }

  script = fs.readFileSync(path.join(__dirname, './ddl.sql')).toString();
  try {
    await MYSQL_CONNECTOR.connection.query(script);
    console.log('DDL Created Successfully for MySQL');
  } catch (error) {
    console.log(`DDL Creation query not executed successfully for MySQL because --> ${error.message}`);
  }

  script = fs.readFileSync(path.join(__dirname, './insertSql.sql')).toString();
  try {
    await MYSQL_CONNECTOR.connection.query(script);
    console.log('Insertions Done Successfully for MYSQL');
  } catch (error) {
    console.log(`Insertion query Not Executed Successfully
   For MySQL Because --> ${error.message}`);
  }
};

module.exports.createAndInsert = createAndInsert;
