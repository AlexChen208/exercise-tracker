const Workout = require('../../models/workout')

module.exports = { 
  index,
  create,
  };

  async function index(req, res) {
    const workout = await Workout.find({user : req.user._id})
    // const property = await Property.getAllProperties();
    res.json(workout)
}

  async function create(req, res) {
    const newWorkOut = await Workout.create(req.body)
    console.log(newWorkOut)
    return res.json(newWorkOut)
  }
