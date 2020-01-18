const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config()
require('./config/database')


app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', require('./routes/api/users'));
// Mount our custom auth middleware to protect routes below it
app.use(require('./config/auth'));

// require('dotenv').config()





app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build'));
  });

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});


