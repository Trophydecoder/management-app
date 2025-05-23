var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const loginRouter = require ('./Apis/ApiRoutes/loginRouter')
const PlayersRouter = require('./routes/PlayersRouter');
const ApiRouter = require ('./Apis/ApiRoutes/Routes')
const registerRouter = require ('./Apis/ApiRoutes/RegisterRoutes')
const  getOneRouter = require ('./Apis/ApiRoutes/Getoneroute')
const whatsappRoutes = require('./Apis/ApiRoutes/whatsappRoutes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use('/api', whatsappRoutes);
app.use('/api', getOneRouter) //it falls unders PLAYERS just that i can't use two POSTS on one page  so i created this one
app.use('/api', loginRouter)
app.use('/api', registerRouter)
app.use('/Players',PlayersRouter);
app.use('/api', ApiRouter)



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
