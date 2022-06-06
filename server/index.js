const passport = require('passport')
require('./routes/authRoutes')



//Not using ES2015 syntax, JS module syntax
const express = require('express');
require('./services/passport')
//declaration of express app
const app = express();

require('./routes/authRoutes')(app)

authRoutes(app);


// dynamically set port, heroku insert env variables to execute code in the node compilation or default to 5000
const PORT = process.env.PORT || 5000
// express executes node to listen port 5000

app.listen(PORT);