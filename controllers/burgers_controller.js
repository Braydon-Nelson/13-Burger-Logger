var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js');

//homepage route to render body of page
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var handlebarObject = { burgers: data };
        console.log(handlebarObject);
        res.render('index', handlebarObject);

    });

});

//route for creating a burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/');
    });
});

//route for 'eating' a burger
router.post('/burger/eat', function (req, res) {
    burger.updateOne(req.body.id, function () {
        res.redirect('/');
    });
});

//route for deleting a burger
router.post('/burger/delete', function (req, res) {
    burger.deleteOne(req.body.id, function () {
        res.redirect('/');
    });
});

module.exports = router;
