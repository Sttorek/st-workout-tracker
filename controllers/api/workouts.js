const router = require("express").Router();
const Workout = require("../../models/workoutModel.js");

router.get("/", (req, res) => {
  // console.log(req.body)
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body },
    },
    { new: true, runValidators: true }
  )
    .then((updatedWorkout) => res.json(updatedWorkout))
    .catch((err) => res.json(err));
});

// Post route to add exercise
router.post("/", (req, res) => {
  // console.log(req.body)
  Workout.create(req.body)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
