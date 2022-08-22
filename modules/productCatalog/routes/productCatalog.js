const express = require('express');
const router = express.Router();
const productDescriptionController = require('../controllers/productDescriptionController');

router.get('/', async (req, res) => {
    res.locals.topProducts = await productDescriptionController.getTopProducts();
    res.locals.products = await productDescriptionController.getAllProducts();
    res.render('category', { banner: 'Shop Category' });
});

router.get('/cart', (req, res) => {
    res.render('cart', { banner: 'Shopping Cart' });
});

router.get('/checkout', (req, res) => {
    res.render('checkout', { banner: 'Product Checkout' });
});

router.get('/:id', (req, res) => {
    res.render('single-product', { banner: 'Shop Single' });
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