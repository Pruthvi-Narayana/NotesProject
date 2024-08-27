const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// App router
router.get('/', mainController.homepage);
router.get('/about', mainController.about);



// Export the router
module.exports = router;
