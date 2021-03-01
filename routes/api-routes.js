// Declare Dependencies
const router = require("express").Router();
const db = require("../models");
const Workout = require("../models/workout");

// All Workouts
router.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// New Exercise
router.post("/api/workout", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// Continue Exercise
router.put("/api/workout/:id", (req, res) => {
    Workout.updateOne({
        _id: req.params.id
    }, {
        $push: { exercises: req.body }
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});



module.exports = router;