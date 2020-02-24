const router = require('express').Router();

// temporary route to check current user
router.get('/', (req, res) => {
  res.send(req.user);
});

// log current user out (delete cookie)
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
