var express = require('express');
var router = express.Router();
var Query = require('../models/Query');
var request = require('request');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api',function(req, res, next) {
	// var now = moment()
	// var formatted = now.format('YYYY-MM-DD HH:mm:ss Z')
	// console.log(formatted)
	// var query = new Query({
	// 	job_title: req.body[0],
	// 	zipcode: req.body[1],
	// })
	// job.save(function(err) {
	// 	if (err) throw err;
 //  	})
	console.log(req.body)
	request({
		url: 'http://api.indeed.com/ads/apisearch?publisher=2878037053725137&q=' + req.body[0] + '&l=' + req.body[1] + '&sort=&radius=&st=&jt=&start=&limit=20&fromage=&filter=&latlong=1&co=us&chnl=FJR&format=json&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2',
		method: 'GET',
		json: true

	}, function (error, response) {
		res.send(response)
	})
});

//'http://api.indeed.com/ads/apisearch?publisher=2878037053725137&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=FJR&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'


module.exports = router;
