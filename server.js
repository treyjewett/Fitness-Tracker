// Declare dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");
require("dotenv").config({ silent: true });
const PORT = process.env.PORT || 8080;
const app = express();

// Configuring the server
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    UseFindandModify: false
}, () => {
    console.log("Mongoose is connected")
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});