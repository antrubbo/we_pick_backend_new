import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import models from '../models'

const Users = models.users

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
        Users.findAll({ where: { id: jwt_payload.id } })
          .then(user => {
            if (user.length) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(err => console.log(err));
      })
    );
  };