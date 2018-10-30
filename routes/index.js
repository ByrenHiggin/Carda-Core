const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use(require('./serverRoutes'))

module.exports = router;