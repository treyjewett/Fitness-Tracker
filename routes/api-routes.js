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
        // Select the id of the workout to update, then push the updates.
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

// Chart Data
router.get("/api/workout/range", (req, res) => {
    Workout.find({})
    Workout.aggregate([
        {
            // Add a field to total the duration of all the workouts
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
    // Add sort function to limit workout instances to previous 7 days.
    .sort( { "_id": 1, "day": 1 } )
    .limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;