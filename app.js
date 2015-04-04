var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var indexController = require('./controllers/index.js');
var teamsController = require('./controllers/teams');

var Team = require('./models/teams')

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/makenoise')



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/home', function(req,res){
	res.render('home');
});
app.post('/addTeam', function(req,res){
	
	// Or if name on is is team ==> req.body.team
	var newTeam = req.body;
	console.log(newTeam);


	var team = new Team(newTeam);
	team.save(function(err, savedTeam){
		res.send(savedTeam);
	});


	// team.team.push(newTeam);

});
var server = app.listen(8463, function() {
	console.log('Express server listening on port ' + server.address().port);
});
