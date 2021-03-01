// Declare dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
require("dotenv").config();

const db = require("./models");
const app = express();

// Configuring the server
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    UseFindAndModify: false
}, () => {
    console.log("Mongoose is connected")
});

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});