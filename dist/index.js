"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var config_1 = require("./config/config");
var player = require("./api/player");
var app = express();
var mongoose = require('mongoose');
mongoose.connect(config_1.Config.current.mongoConnectionString);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
if (config_1.Config.env == 'development') {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}
;
player.players(app);
app.use('/', express.static(config_1.Config.current.root + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
    });
});
var server = app.listen(config_1.Config.current.port, function () {
    console.log('Server listening on port' + config_1.Config.current.port);
});