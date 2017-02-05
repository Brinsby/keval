//requiring packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Schema
var Keval = require('./app/models/keval')
//connect to db
mongoose.Promise = global.Promise; //apparently this is now needed due to  a library depracation inside mongoose
mongoose.connect('mongodb://msa:app@jello.modulusmongo.net:27017/avety2vA');

//make app use body parser, allows us to gather data from POST request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set application to listen on 3031
var port = process.env.PORT || 3031;

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
});



//Actual API calls
//first handle basic post and get calls
router.route('/keval')
	//accessed via a post request (localhost:3031/api/keval)
    .post(function(req, res) {
        
        var keval = new Keval();      // create a new instance of the keval model
        keval.name = req.body.name;  // set the keval name (comes from the request)

        // save the keval and check for errors
        keval.save(function(err) {
            if (err){ res.send(err); }
            res.json({ message: 'keval created!' });
        });
        
    })
    //accessed via a get request (localhost:3031/api/keval)
    .get(function(req, res) {
        Keval.find(function(err, keval) {
            if (err){ res.send(err); }
            res.json(keval);
        });
    });

//now handle specific get specific, update, and delete a keval
router.route('/keval/:keval_id')
	.get(function (req, res) {
		Keval.findById(req.params.keval_id, function (err, keval) {
			if(err){ res.send(err); }
			res.json(keval);
		});
	})
	.put(function (req, res) {
		Keval.findById(req.params.keval_id, function (err, keval) {
			if(err){ res.send(err); }
			keval.name = req.body.name;//update the info (name)

			keval.save(function(err){
				if(err) res.send(err);

				res.json({ message: 'keval updated!'});
			});
		});
	})
	.delete(function (req, res) {
		Keval.remove({
			_id: req.params.keval_id
		}, function (err, bear) {
			if(err){ res.send(err); }
			res.json({ message: 'Successfully deleted' });
		});
	});

//Resgister routes
//all routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log("Magic happens on port " + port);