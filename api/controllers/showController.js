// Require packages
var Show = require('../models/show');

function allShows(req, res) {
  Show.find(function (err, shows) {
     if (err) return res.status(404).json({message: 'Something went wrong.'});
     res.status(200).json({ shows: shows });
   });
};

module.exports = {
  allShows: allShows,
  getShows: getShows
};

