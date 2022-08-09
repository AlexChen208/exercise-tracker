const Workout = require('../../models/workout')

module.exports = { 
  create,
  };

  async function create(req, res) {
    const newWorkOut = await Workout.create(req.body)
    console.log(newWorkOut)
    return res.json(newWorkOut)
  }
