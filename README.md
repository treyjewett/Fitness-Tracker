# Fitness-Tracker

![badge](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

## Description

Log workouts and view workout progress with MongoDB, Express, and Morgan Middleware!

## Table of Contents
- [Code Utilized](#code-utilized:)
- [What to Expect](#what-to-expect:)
- [Rendered Website](#rendered-website:)
- [License](#license:)
- [Lessons Learned](#lessons-learned:)

## Code Utilized

This application was made using:
MongoDB | Mongoose | AtlasDB | Node.js | Express.js | Dotenv | Heroku

## What to Expect

Upon loading the page, the user is presented with their most recent workout. The user has the option to continue the workout or to add a new workout. If the user selects continue workout, they can add exercises to the most recent workout listed when the app opened. If the user choose to add a new workout, they will start a new workout completely.
Upon making their choice, the user will be promped to choose which kind of wokout they want to log, Cardio or Resistance.
If the user chooses Cardio, they will be promped with a name, distance (in miles), and duration (in minutes) form. Once that form is filled out, an alert displays letting them know the workout was logged and they will be brought back to the main page and see an updated workout log.
If the user chooses Resistance, they will be promped with a name, weight (in Lbs), sets, reps, and duration (in minutes) form. Once that form is filled out, an alert displays letting them know the workout was logged and they will be brought back to the main page and see an updated workout log.
At the top left of the page, there is a "Dashboard" navigation button. The user can select this at any time, and if they do, they will see totals from the last 7 days of their workouts plotted in various charts to track their progress.

## Website

This application is deployed on Heroku.

<img src="public\assets\img\homepage.png" alt="Rendered Home Page">

<img src="public\assets\img\totals.png" alt="Rendered Totals Charts">

To visit the application, please follow the link below:

<a href="https://russells-fitness-tracker.herokuapp.com/" target="_blank">View the Fitness Tracker here!</a>

## License

This project is using MIT.

## Lessons Learned

Documentation is key. I had some initial struggles setting up the Atlas database connection because I was not abiding by the .env format correctly. Once I solved that issue, I found that this is an incredibly efficient way to view, add, and update data!