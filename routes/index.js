const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('routes loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/about', require('./about'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/likes', require('./likes'));
router.use('/reset-password', require('./reset_password'));

router.use('/api', require('./api'));

module.exports = router;