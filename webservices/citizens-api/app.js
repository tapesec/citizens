const express = require('express');
const path = require('path');
let favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

var passport = require('passport');
//var JwtStrategy = require('passport-jwt').Strategy
//,   ExtractJwt = require('./authentications/sessionExctractor');

let routes = require('./routes/index');
const users = require('./routes/users');
const messages = require('./routes/messages');
const informations = require('./routes/informations');
import SocketManager from './real_time/SocketManager';
const socketManager = new SocketManager();

const socketMiddleware = (req, res, next) => {
    req.socketManager = socketManager;
    next();
}

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || '3001';
app.set('port', port);
server.listen(port, () => console.log(`Api started on port ${port}!`));

// uncomment after placing your favicon in /public
app.use(logger('dev'));
//app.options('*', cors()); // preflight for all http verbs even special one
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(socketMiddleware);

app.use('/messages', messages);
app.use('/users', function(req, res, next) { console.log('ALORS ?'); next(); }, users);
app.use('/informations', informations);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


io.on('connection', function (socket) {
    socket.on('authenticate', (payload) => {
        // if authenticated successfull
        socket.jwt = payload.jwt;
        socket.isLogIn = payload.isLogIn;
        socketManager.add(socket);

    });
});


module.exports = app;
