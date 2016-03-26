// Require Packages
var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

// Require Relative Files
var config = require('./config/config');
var routes = require('./config/routes');

// Connect to mongoDB via mongoose
mongoose.connect(config.database);

// Create App
var app = express();

// Setup app to use packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());

// Setup method-override
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  };
}));

// Routing app via the '/api' sub-domain
app.use('/api', routes);

app.listen(3000);
console.log("BBC API is alive and listenin on port 3000");




