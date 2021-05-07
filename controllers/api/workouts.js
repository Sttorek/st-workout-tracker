const router = require("express").Router();
const Workout = require("../../models/workoutModel.js");


router.get("/", (req, res) => {
    // console.log(req.body)
    Workout.find()
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });











// Post route to add exercise
router.post("/", (req, res) => {
  // console.log(req.body)
  Workout.create()
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
