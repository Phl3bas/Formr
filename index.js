const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./src/config/environment');

//routes
const googleAuthRoute = require('./src/routes/auth.google.routes');
const userRoute = require('./src/routes/user.routes');

require('./src/models/User.model');
require('./src/services/passport');

mongoose.connect(keys.MongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.CookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/google', googleAuthRoute);
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at Port: ${PORT} at http://localhost:${PORT}`);
});

/// new branch
