const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/', async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;