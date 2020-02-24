require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    GoogleSecret: process.env.GOOGLE_SECRET_KEY_PROD,
    GoogleClient: process.env.GOOGLE_CLIENT_ID_PROD,
    MongoURI: process.env.MONGO_URI_PROD,
    CookieKey: process.env.COOKIE_KEY,
  };
} else {
  console.log('dev key loaded');
  module.exports = {
    GoogleSecret: process.env.GOOGLE_SECRET_KEY_DEV,
    GoogleClient: process.env.GOOGLE_CLIENT_ID_DEV,
    MongoURI: process.env.MONGO_URI_DEV,
    CookieKey: process.env.COOKIE_KEY,
  };
}
