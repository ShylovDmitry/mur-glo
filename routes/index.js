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
			teachers
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

		let classes = await request.get(`${config.baseUrl}/api/classes/?teacherId=${req.params.id}`).type('json');
		classes = classes.body;

		const groupedClasses = groupClasses(classes);

		res.render('detail', { 
			title: 'Glo',
			teacher,
			groupedClasses
		});
	}
	catch (e) {
		return next({ status : 500 });
	}
});

function groupClasses(classes) {
	const groupedClasses = [];

	for (let classItem of classes) {
		const styleId = classItem.styleData.id;
		if (typeof groupedClasses[styleId] === 'undefined') {
			groupedClasses[styleId] = {
				...classItem.styleData,
				classes: []
			};
		}
		groupedClasses[styleId].classes.push(classItem);
	}

	return groupedClasses;
}

module.exports = router;
