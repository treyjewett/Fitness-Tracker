// declare dependencies
const router = require("express").Router();
const path = require("path");

// homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;