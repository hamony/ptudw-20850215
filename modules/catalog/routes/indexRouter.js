const express = require('express');
const router = express.Router();
const CatalogController = require('../controllers/CatalogController');
const ProductController = require('../controllers/ProductController');

router.get('/', async (req, res, next) => {
    try {
        res.locals.catalogs = await CatalogController.getAllCatalogs();
        res.locals.trendingProducts = await ProductController.getTrendingProducts();
        res.render('index');   
    } catch (error) {
        next(error);
    }
});


module.exports = router;