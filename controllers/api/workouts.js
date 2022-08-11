const Workout = require('../../models/workout')

module.exports = { 
  index,
  create,
  delete: deleteWorkout,
  };

  async function index(req, res) {
    const workout = await Workout.find({user : req.user._id})
    res.json(workout)
}

  async function create(req, res) {
    const newWorkOut = await Workout.create(req.body)
    console.log(newWorkOut)
    return res.json(newWorkOut)
  }

async function deleteWorkout(req, res) {
  const deleteWorkout = await Workout.findByIdAndRemove(req.params.id)
  return res.json(deleteWorkout)
}