var jwt = require('jsonwebtoken');
var konsole = require('./utils/CustomLog');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
// var passport = require('passport');
// var JwtStrategy = require('passport-jwt').Strategy
// ,   ExtractJwt = require('./authentications/sessionExctractor');
import * as constant from './../shared/constants/';

var controller = require('./controller/');

// passport.use(new JwtStrategy({
//     jwtFromRequest: ExtractJwt.fromSession,
//     secretOrKey: process.env.SECRET_PASSPHRASE,
//     issuer: process.env.ADMIN_MAIL,
//     audience: process.env.WEB_URL
// }, (jwt_payload, done) => {
//     konsole.log('dev', jwt_payload, 'PAYLOAD');
//     done(null, { name: 'lionnel'});
// }));

var app = express();

app.use(cookieParser());
app.use(session({
    store: new RedisStore({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }),
    secret: process.env.SECRET_PASSPHRASE,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false //obligé pour http classic
    }
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get([constant.SIGN_IN, constant.MAIN_PAGE], function(req, res, next) {
    konsole.log(Boolean(req.session), req.url, 'session and url ---->');
    if (!Boolean(req.session) || !req.session.isLogIn) {
        if (req.url !== constant.SIGN_IN) {
            res.redirect(constant.SIGN_IN);
        } else {
            next();
        }
    } else if (Boolean(req.session) && Boolean(req.session.isLogIn)) {
        if (req.url === constant.SIGN_IN) {
            res.redirect(constant.MAIN_PAGE);
        } else {
            next();
        }
    }
});

app.post(constant.AUTH, (req, res) => {
    var token = jwt.sign(req.body, 'lasalle');
    req.session.jwt = token;
    req.session.accountName = 'lasalle';
    req.session.isLogIn = true;
    res.status(201).send({
        jwt: token,
        isLogIn: true,
        accountName: 'lasalle'
    });
});

app.get(constant.LOGOUT, (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send(err);
        else {
            res.send();
        }
    });
});

app.get([constant.SIGN_IN, constant.MAIN_PAGE], controller);

//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
