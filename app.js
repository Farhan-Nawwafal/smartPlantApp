const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');


// IMPORT ROUTES START
const homeRouter = require('./routes/home');
const dashboardRouter = require('./routes/dashboard');
const aboutRouter = require('./routes/about');
const defaultRouter = require('./routes/default');
const plantsRoute = require('./routes/plants');
// IMPORT ROUTES END

// import controller

const app = express();

// view engine setup
app.set('layout', 'layouts/main');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// ROUTER START
app.use('/', defaultRouter);
app.use('/home', homeRouter);
app.use('/dashboard', dashboardRouter);
app.use('/about', aboutRouter);
app.use('/api', plantsRoute);
// ROUTER END


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
