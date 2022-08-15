const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
  comments: {type: String}
})

const workoutSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  name: {type: String},
  reps: {type: String},
  comments: [CommentSchema],
}, {
  timestamps: true
});


module.exports = mongoose.model('Workout', workoutSchema);