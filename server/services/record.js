const { Attendance } = require('../models/attendance');

const savingAttendanceRecord = async (recordData) => {
  try {
    try {
      const result = await Attendance.find({ date: `${String(recordData.date)}` }).exec();

      if (result.length !== 0) {
        throw new Error('Error: Duplicate key error collection');
      }
    } catch (error) {
      throw new Error(`Unable to filter from Attendance set, due to error "${error}"`);
    }

    const attendance = new Attendance({
      teacher_handler: recordData.handle,
      course_id: recordData.course_id,
      date: recordData.date,
      presence: recordData.presence,
      names: recordData.names,
    });
    await attendance.save();
    return { msg: 'Success!' };
  } catch (error) {
    throw new Error(`Unable to save to MongoDB due to the error, ${error.message}`);
  }
};

module.exports.savingAttendanceRecord = savingAttendanceRecord;
