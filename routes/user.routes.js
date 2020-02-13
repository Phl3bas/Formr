const router = require('express').Router();

// temporary route to check current user
router.get('/current', (req, res) => {
  res.send(req.user);
});

// log current user out (delete cookie)
router.get('/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
