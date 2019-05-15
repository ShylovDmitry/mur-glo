const async = require('async'),
	express = require('express'),
	request = require('superagent'),
	config = require('../config'),
	router = express.Router();

// Home / all teachers view
router.get('/', async (req, res, next) => {

	try {
		let teachers = await request.get(`${config.baseUrl}/api/teachers`).type('json');
		teachers = teachers.body;

		res.render('index', { 
			title: 'Glo',
			teachers: teachers
		});
	}
	catch (e) {
		return next({ status : 500 });
	}
});

// Individual teacher view
router.get('/:id', async (req, res, next) => {	
	try {
		let teacher = await request.get(`${config.baseUrl}/api/teachers/${req.params.id}`).type('json');
		teacher = teacher.body;

		// TODO Similar to above teacher request, make a request to the API 
		// to retrieve this teacher's classes

		res.render('detail', { 
			title: 'Glo',
			teacher: teacher,
			classes: [] // TODO Adjust this view object to include teacher's classes
		});
	}
	catch (e) {
		return next({ status : 500 });
	}
});

module.exports = router;
