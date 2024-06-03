const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  schedule: [{ day: String, startTime: String, endTime: String }]
});

module.exports = mongoose.model('Classroom', ClassroomSchema);
