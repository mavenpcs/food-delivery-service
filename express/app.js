const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000'
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// parse requests of content-type: application/json
// app.use(cors(corsOptions));
app.use(cors())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/vendor.routes')(app);
require('./routes/food.routes')(app);
require('./routes//review.routes')(app);
require('./routes/order.routes')(app);

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

const db = require('./models/index');
const { sequelize } = require('./models/index');
// for pre-populating users, not needed for production
const initial = require('./prepopulate.data');

// For development
// db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(() => {
//   db.sequelize.sync({ force: true })
//   .then(() => {
//     db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
//     .then(() => {
//       console.log('Drop and Resync DB');
//       initial();
//     }, (err) => {
//       console.log(err);
//     })
//   });
// }, (err) => {
//   console.log(err);
// });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync DB');
//   initial();
// });

// For production
db.sequelize.sync().then(() => {
  initial();
});

module.exports = app;
