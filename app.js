const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

// Instantiate DB
const db = require('./db').setupDb();

const indexRouter = require('./routes/index');
const classesRouter = require('./routes/classes');
const teachersRouter = require('./routes/teachers');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({
	extname: 'hbs',
	defaultLayout: 'layout',
	layoutsDir: __dirname + '/views',
	partialsDir: [
		__dirname + '/views/partials',
	]
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/classes', classesRouter);
app.use('/api/teachers', teachersRouter);

// Front end routes
app.use('/', indexRouter);

// catch favicon requests and blank them
app.get('/favicon.ico', (req, res) => res.status(204));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
