var express = require('express');
var bodyParser = require('body-parser');
var shortid= require('shortid');
var http = require('http')
var util = require('util');
var account = { 'username': 'e.hruska85@yahoo.com'};

var config = require('./controllers/config.js')
var indexController = require('./controllers/index.js');
// var patientsController = require('./controllers/patients');

// var Patient = require('./models/patients')



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use("/bower_components", express.static(__dirname + '/bower_components'));

app.get('/', indexController.index);
// app.get('/home', function(req,res){
// 	res.render('home');
// });
// app.post('/addPatient', function(req,res){
	
// 	// Or if name on input is team ==> req.body.team
// 	var newPatient = req.body;

// 	var patient = new Patient(newPatient);
// 	patient.save(function(err, savedPatient){
// 		console.log(savedPatient)
// 		res.redirect('/');
// 	});

// 	// team.team.push(newTeam);

// });

// app.get('/search', function (req, res) {

//   res.render('search');

// });
// app.post('/search', function (req, res) {
 
//   // User.findOne({'username':username}, function(err, user){
//   		// console.log(req.body.search)
//   		// 
  		
  
// 	  Patient.find({name: new RegExp(req.body.search, 'i')}, function (err, user) {
// 		// if (err) return next(err);

//   //       // If user is not found...
//   //       if (!user){
//   //         return next(null, false, req.flash('loginError', 'No user found.'));
//   //       }
//   //       console.log(user)

	    
//   			// res.send(user)
//   			// res.redirect('search')
// 	      res.render('search', {userlist: user});
// 	    })
	   
// 	    // res.('/search')
// });

// // app.post('/addChant', teamsController.AddChant);
// app.post('/addChant', function(req,res){
	
// 	// Or if name on input is team ==> req.body.team
// 	var newTeam = req.body;
// 	console.log(newTeam);
// 	console.log(newTeam.team);


// 	// var team = new Team(newTeam);
// 	// team.save(function(err, savedTeam){
// 	// 	res.send(savedTeam);
// 	// });


// 	// team.team.push(newTeam);

// });




var server = app.listen(8463, function() {
	console.log('Express server listening on port ' + server.address().port);
});
