const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// routes come from utilities and how they relate
// All routes start with /api/workouts
// GET /api/workouts/activity 
router.get('/index', workoutsCtrl.index);

router.post('/activity', ensureLoggedIn,workoutsCtrl.create);

router.delete('/delete/:id', ensureLoggedIn ,workoutsCtrl.delete)

router.put('/:id', ensureLoggedIn, workoutsCtrl.update)

module.exports = router;
