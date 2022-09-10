const express = require('express');
const router = express.Router();
const CatalogController = require('../controllers/CatalogController');

router.get('/', (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;