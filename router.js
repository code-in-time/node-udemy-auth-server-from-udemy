const Authentcation = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {

    // Note: remember to add a authorization token into the headers
    app.get('/',requireAuth, function(req, res) {
        res.send({message:'Super secret code is ABC123'});

    });

    app.post('/signin', requireSignin, Authentcation.signin);
    app.post('/signup', Authentcation.signup);
}