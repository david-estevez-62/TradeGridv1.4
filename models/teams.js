var mongoose = require('mongoose');
var shortid= require('shortid');

var teamsSchema = mongoose.Schema({
  team: String,
  chants: [
      {
        contents: [],
        _id: {
            type: String,
            unique: true,
            'default': shortid.generate
        }
      }
    ],
  imageUrl: String
});


// Our team model
var Team = mongoose.model('team', teamsSchema);

// Make team model available through exports/require
module.exports = Team;