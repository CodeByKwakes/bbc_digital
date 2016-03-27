var mongoose = require("mongoose");

var showSchema = new mongoose.Schema({
  title: String,
  image: String,
});

module.exports = mongoose.model("Show", showSchema);