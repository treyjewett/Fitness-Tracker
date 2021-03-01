// Declare Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [{
        name: {
            type: String
        },
        type: {
            type: String
        },
        weight: {
            type: Number,
            allowNull: true
        },
        sets: {
            type: Number,
            allowNull: true
        },
        reps: {
            type: Number,
            allowNull: true
        },
        duration: {
            type: Number
        },
        distance: {
            type: Number,
            allowNull: true
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;