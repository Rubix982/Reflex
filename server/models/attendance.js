const mongoose = require('mongoose');

const { Schema } = mongoose;

const AttendanceRecord = new Schema({
  course_id: {
    type: String,
    maxlength: 40,
    required: true,
    default: false,
  },
  student_id: {
    type: String,
    maxlength: 40,
    required: true,
    default: false,
  },
  presence: {
    type: String,
    maxlength: 4,
    required: true,
    default: false,
  },
});

module.exports.Attendance = mongoose.model('Attendance', AttendanceRecord);
