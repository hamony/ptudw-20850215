const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');
const productController = require('../controllers/productController');

router.get('/', async (req, res, next) => {
    try {
        res.locals.catalogs = await catalogController.getAllCatalogs();
        res.locals.trendingProducts = await productController.getTrendingProducts();
        res.render('index');   
    } catch (error) {
        next(error);
    }
});


module.exports = router;