const express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
// var db = require('../models.user.js');
const router = express.Router();

// passport.use(new LocalStrategy(function verify(username, password, cb) {
//     db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], function(err, row) {
//       if (err) { return cb(err); }
//       if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
//       crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
//         if (err) { return cb(err); }
//         if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
//           return cb(null, false, { message: 'Incorrect username or password.' });
//         }
//         return cb(null, row);
//       });
//     });

    // logic from previous usersController login route
    // const { username } = req.query
    // let foundUser = await User.findAll({ where: { username } })
    // if (foundUser.length) res.status(200).json(foundUser)
    // else res.status(404).json({ error: "No user associated with that username"})
//   }));

const authorize = require("../controllers/authController.js")

router.get("/login", authorize.auth)

module.exports = router;