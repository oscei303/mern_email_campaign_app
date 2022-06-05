//Not using ES2015 syntax, JS module syntax
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');


//declaration of express app
const app = express();


// init route handler

// '/' is the route portion of the handler


//app.get('/', (req, res) => {
//    res.send({ hi : 'sup'})

//})

passport.use(new GoogleStrategy());


// express executes node to listen port 5000

// dynamically set port, heroku insert env variables to execute code in the node compilation or default to 5000
const PORT = process.env.PORT || 5000

app.listen(PORT);ß