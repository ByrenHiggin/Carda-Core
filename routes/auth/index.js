const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../../auth');
const Users = mongoose.model('Auth');

//POST new user route (optional, everyone has access)
router.post('/', auth.flags.optional, auth.methods.new_login);

//POST login route (optional, everyone has access)
router.post('/login', auth.flags.optional, auth.methods.login);

//GET current route (required, only authenticated users have access)
router.get('/current', auth.flags.required, auth.methods.current_user);

module.exports = router;