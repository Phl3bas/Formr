const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/environment');

//routes
const googleAuthRoute = require('./routes/auth.google.routes');
const userRoute = require('./routes/user.routes');

require('./models/User.model');
require('./services/passport');

mongoose.connect(keys.MongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongo db connected'));

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
