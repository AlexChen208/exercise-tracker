const Workout = require('../../models/workout')

module.exports = { 
  index,
  create,
  delete: deleteWorkout,
  update,
  };

  async function index(req, res) {
    const workout = await Workout.find({user : req.user._id})
    res.json(workout)
}

  async function create(req, res) {
    req.body.user = req.user._id
    const newWorkOut = await Workout.create(req.body)
    console.log(newWorkOut)
    return res.json(newWorkOut)
  }

async function deleteWorkout(req, res) {
  const deleteWorkout = await Workout.findByIdAndRemove(req.params.id)
  return res.json(deleteWorkout)
}

async function update(req, res) {
  const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body)
  return res.json(updateWorkout)
}
