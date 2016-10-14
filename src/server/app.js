module.exports = new Promise((resolve, reject) => {

    var konsole = require('./utils/CustomLog');
    var express = require('express');
    var path = require('path');
    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var session = require('express-session');
    var bodyParser = require('body-parser');
    var passport = require('passport');
    var JwtStrategy = require('passport-jwt').Strategy
    ,   ExtractJwt = require('./authentications/sessionExctractor');


    konsole.log("lol");

    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromSession,
        secretOrKey: process.env.SECRET_PASSPHRASE,
        issuer: process.env.ADMIN_MAIL,
        audience: process.env.WEB_URL
    }, (jwt_payload, done) => {
        konsole.log('dev', jwt_payload, 'PAYLOAD');
        done(null, { name: "lionnel"});
    }));

    var db = require('./database/');

    db.init().then(function() {

        var routes = require('./routes/index');
        var users = require('./routes/users');

        var app = express();

        app.use(session({
            secret: 'lasalle',
            resave: false,
            saveUninitialized: false,
            cookie: { 
                secure: false //obligé pour http classic
            }
        }));

        // view engine setup
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'hbs');

        // uncomment after placing your favicon in /public
        //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));



        app.use('/', routes);
        app.use('/users', users);

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
            res.render('error', {
                message: err.message,
                error: {}
            });
        });


        resolve(app);  
    });    

});



