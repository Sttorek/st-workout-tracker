const router = require('express').Router();
const Workout = require('../../models/workoutModel.js');

// Post route to add exercise
router.post('/', async (req, res) => {
    console.log(req.body)
    await Workout.create({ 
        day: Date.now,
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
        duration: req.body.duration
    }, 
    function (err) {
        if (err) return (err);
      });
});


module.exports = router;