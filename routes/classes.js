const _ = require('lodash'),
	express = require('express'),
	router = express.Router(),
	models = require('../models');

// GET /classes
router.get('/', async (req, res, next) => {
	let classQuery = models.Class.query();

	try {
		let classes = await classQuery;

		// TODO flesh out this endpoint to return classes
		console.log('classes', classes);

		res.json({});
	}	
	catch (e) {
		return next({ status : 500 });
	}
});

module.exports = router;
