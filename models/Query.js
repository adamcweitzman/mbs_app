var mongoose = require('mongoose');


var querySchema = new mongoose.Schema({
  zipcode: Number,
  search_term: String,
  ip_address: String, 
  time : String
});


var query = mongoose.model('query', querySchema);
// Make this available to our other files
module.exports = query;