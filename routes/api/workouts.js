const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

// routes come from utilities and how they relate
// All routes start with /api/workouts
// GET /api/workouts/activity 
router.get('/index', workoutsCtrl.index);

router.post('/activity', workoutsCtrl.create);

router.delete('/delete/:id', workoutsCtrl.delete)

module.exports = router;
