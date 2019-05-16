const _ = require('lodash'),
	express = require('express'),
	router = express.Router(),
	models = require('../models');

// GET /classes
router.get('/', async (req, res, next) => {
	let classQuery = models.Class.query();

	try {
		if (req.query.teacherId) {
			classQuery.where('teacher', req.query.teacherId);
		}
		res.json(await classQuery);
	}	
	catch (e) {
		return next({ status : 500 });
	}
});

module.exports = router;
