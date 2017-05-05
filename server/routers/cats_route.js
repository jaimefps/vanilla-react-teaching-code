var express = require('express');
var router = express.Router();
var connection = require('../database.js');

router.post('/', function (req, res) {	
	let data = req.body;
	let row = {
		name: data.name,
		email: data.email,
		description: data.description,
		url: data.url,
	};
  connection.query('INSERT INTO allCats SET ?', row, function (err, result) {
   if (err) console.log(err);
   res.sendStatus(201).end();
  });
});

router.get('/', function (req, res) {
  connection.query('SELECT * FROM allCats', function (err, result) {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;