var Team = require('../models/teams.js');
var shortid= require('shortid');

var teamsController = {

	// AddTeam: function (req,res) {
		
	// },

	AddChant: function (req, res) {
		var data = req.body;
		var id = req.user._id;

		// console.log('this is req.body in guestUpdateInfo: ', req.user);
		Team.findById(id, function(err, user) {
			if (err) return handleErr(err);

		var uid = shortid.generate();

			newChant = {
					contents: data.postData,
			        _id: uid,
			    }
			
			   	team.chants.push(newChant);

				team.save(function(err, team){
					if(err) return handleErr(err);
					res.send(team);
					// res.redirect('/'+id+'/home');
				});

			});

		}

};

module.exports = teamsController;