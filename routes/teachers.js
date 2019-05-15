const express = require('express'),
	router = express.Router(),
	models = require('../models');

// GET /teachers
router.get('/', async (req, res, next) => {
	try {
		let teachers = await models.Teacher.query();
		res.json(teachers);
	}
	catch (e) {
		return next({ status : 500 });
	}
});

router.get('/:teacherId', async (req, res, next) => {
	try {
		let teacher = await models.Teacher.query().findOne({id: req.params.teacherId});
		res.json(teacher);
	}
	catch (e) {
		return next({ status : 500 });
	}
});

module.exports = router;
