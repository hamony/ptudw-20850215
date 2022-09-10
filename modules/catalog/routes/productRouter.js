const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const CatalogController = require('../controllers/CatalogController');
const BrandController = require('../controllers/BrandController');
const AttributeController = require('../controllers/AttributeController');

router.get('/', async (req, res, next) => {
    try {
        res.locals.colors = await AttributeController.getAttributes('color');
        res.locals.brands = await BrandController.getAllBrands();
        res.locals.catalogs = await CatalogController.getAllCatalogs();
        res.locals.topProducts = await ProductController.getTopProducts();
        res.locals.products = await ProductController.getAllProducts();
        res.render('category', { banner: 'Shop Category' });
    } catch (error) {
        next(error);
    }
});

/**
 * Single Product
 */
router.get('/:id', async (req, res, next) => {
    try {
        res.locals.attributes = await ProductController.getAttributesGroup('product_details', req.params.id);
        res.locals.product = await ProductController.getById(req.params.id);
        res.render('single-product', { banner: 'Shop Single' });   
    } catch (error) {
        next(error);
    }
});

router.get('/cart', (req, res) => {
    res.render('cart', { banner: 'Shopping Cart' });
});

router.get('/checkout', (req, res) => {
    res.render('checkout', { banner: 'Product Checkout' });
});

router.get('/confirmation', (req, res) => {
    res.render('confirmation', { banner: 'Order Confirmation' });
});

router.get('/tracking-order', (req, res) => {
    res.render('tracking-order', { banner: 'Order Tracking' });
});

// app.get('/:page', (req, res) => {
//     const banners = {
//         blog: 'Our Blog',
//         category: 'Shop Category',
//         cart: 'Shopping Cart',
//         checkout: 'Product Checkout',
//         confirmation: 'Order Confirmation',
//         contact: 'Contact Us',
//         login: 'Login / Register',
//         register: 'Register',
//         'single-blog': 'Blog Details',
//         'single-product' : 'Shop Single',
//         'tracking-order' : 'Order Tracking'
//     };
//     let page = req.params.page;
//     res.render(page, { banner: banners[page] });
// });

module.exports = router;