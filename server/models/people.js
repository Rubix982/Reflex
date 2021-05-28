const mongoose = require('mongoose');

const { Schema } = mongoose;

const PeopleRecord = new Schema({
  _id: {
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
});

module.exports.People = mongoose.model('People', PeopleRecord);
