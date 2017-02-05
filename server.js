//requiring packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Keval = require('./app/models/keval')

//connect to db
//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
mongoose.createConnection('mongodb://msa:app@jello.modulusmongo.net:27017/avety2vA');

//make app use body parser, allows us to gather data from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set application to listen on 8080
var port = process.env.PORT || 8080;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//API ROUTES
var router = express.Router();

//middleware to use for all requests
router.use(function(req, res, next) {
	//This is where we would log crap
	console.log("Something is happening");
	next();//go to actual route
});

//First route
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to the API'});
	// next();
});



//Actual API calls
router.route('/keval')
	//accessed via a post request (localhost:8080/api/keval)
	.post(function(req, res) {
		//create new key value model 
		console.log("I made it here");
		var keval = new Keval();
		//set the name to the name that comes from the request
		keval.name = req.body.name;
		
		console.log("I put the value pairs away");

		keval.save(function(err) { //save and check for errors
			if(err){
				console.log("I made a booboo");
				res.send(err);

			}
			console.log("I was unable to send crap");
			res.json({ message: 'Key-Value Pair created! '});
		});
	});
    // .get(function(req, res) {
    //     Keval.find(function(err, keval) {
    //         if (err)
    //             res.send(err);

    //         res.json(keval);
    //     });
    // });


//Resgister routes
//all routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log("Magic happens on port" + port);