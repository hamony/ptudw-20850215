const express = require('express');
const router = express.Router();
const CatalogController = require('../controllers/catalog-controller');
const ProductController = require('../controllers/product-controller');

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