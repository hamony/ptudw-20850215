const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product-controller');
const CatalogController = require('../controllers/catalog-controller');
const BrandController = require('../controllers/brand-controller');
const AttributeController = require('../controllers/attribute-controller');
const CommentController = require('../controllers/comment-controller');
const ReviewController = require('../controllers/review-controller');

router.get('/', async (req, res, next) => {
    try {
        if (req.query.catalog == null || isNaN(req.query.catalog)) {
            req.query.catalog = '';
        }
        if (req.query.brand == null || isNaN(req.query.brand)) {
            req.query.brand = '';
        }
        if (req.query.color == null) {
            req.query.color = '';
        }
        if (req.query.min_price == null || isNaN(req.query.min_price)) {
            req.query.min_price = 0;
        }
        if (req.query.max_price == null || isNaN(req.query.max_price)) {
            req.query.max_price = 100;
        }
        if (req.query.sort == null) {
            req.query.sort = 'name';
        }
        if (req.query.limit == null || isNaN(req.query.limit)) {
            req.query.limit = 9;
        }
        if (req.query.search == null || req.query.search.trim() == '') {
            req.query.search = '';
        }
        if (req.query.page == null || isNaN(req.query.page)) {
            req.query.page = 1;
        }
        res.locals.colors = await AttributeController.getAttributes('color', req.query);
        res.locals.brands = await BrandController.getAllBrands(req.query);
        res.locals.catalogs = await CatalogController.getAllCatalogs(req.query);
        res.locals.topProducts = await ProductController.getTopProducts();
        const products = await ProductController.getAllProducts(req.query);
        res.locals.products = products.rows;
        res.locals.pagination = {
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
            totalRows: products.count
        };
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
        res.locals.comments = await CommentController.getAllCommentsByProductId(req.params.id);
        res.locals.reviews = await ReviewController.getAllReviewsByProductId(req.params.id);
        res.locals.stars = await ReviewController.getAllStarsByProductId(req.params.id);
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