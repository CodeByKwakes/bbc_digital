// Package Required
var express = require('express');

// Controllers Required
var showController = require('../controllers/showController');

// Establish 'router'
var router = express.Router();

// Front-end Routes
router.get('/shows', showController.allShows);
// router.post('/shows/populate', showController.getShows);

module.exports = router;