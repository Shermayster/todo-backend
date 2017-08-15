var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});


router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Pavel',
        lastName: 'Shermayster',
        password: 'super-secret',
        email: email
    });
    user.save(function(err, result) {
        if(err) {
            console.log('err', err);
        }
        if(result) {
            console.log('result', result);
        }
        
    });
    res.redirect('/');
});

module.exports = router;
