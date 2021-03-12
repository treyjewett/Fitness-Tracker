// Declare Dependencies
const router = require("express").Router();
const path = require("path");

// Homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Exercise
router.get("/workout", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Totals (graphs)
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;