const router = require('express').Router();

//routes to be mentioned here
router.use('/notes', require('./notes'));

module.exports = router;