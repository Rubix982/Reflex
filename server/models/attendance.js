const mongoose = require('mongoose');

const { Schema } = mongoose;

const AttendanceRecord = new Schema({
  teacher_handler: {
    type: String,
    maxlength: 40,
    required: true,
  },
  course_id: {
    type: String,
    required: true,
    maxlength: 100,
  },
  date: {
    type: String,
    required: true,
    maxlength: 40,
    default: String(new Date()),
  },
  presence: {
    type: [String],
    required: true,
  },
  names: {
    type: [String],
    required: true,
  },
});

AttendanceRecord.index({ teacher_handler: 1, course_id: 1, date: 1 }, { unique: true });

module.exports.Attendance = mongoose.model('Attendance', AttendanceRecord);
