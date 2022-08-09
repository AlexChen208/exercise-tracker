const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  name: { type: String},
  reps: {type: String},
}, {
  timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);