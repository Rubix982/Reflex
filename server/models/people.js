const mongoose = require('mongoose');

const { Schema } = mongoose;

const PeopleRecord = new Schema({
  teacher_handler: {
    type: String,
    maxlength: 40,
    required: true,
    unique: true,
  },
  course_id: {
    type: String,
    required: true,
    maxlength: 100,
  },
  name: {
    type: String,
    required: true,
    maxlength: 150,
    default: false,
  },
  profilePicture: {
    type: String,
    required: true,
    maxLength: 15,
    default: 'boy(4).svg',
  },
});

module.exports.People = mongoose.model('People', PeopleRecord);
