const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product-controller');

router.get('/', (req, res, next) => {
    try {
        const cart = req.session.cart;
        res.locals.cart = cart.getCart();
        res.render('cart', { banner: 'Shopping Cart' });
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        let productId = req.body.id;
        let quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
        const product = await ProductController.getById(productId);
        const cartItem = req.session.cart.add(product, productId, quantity);
        res.json(cartItem);
    } catch (error) {
        next(error);
    }
});

router.put('/', (req, res) => {
    let productId = req.body.id;
    let quantity = parseInt(req.body.quantity);
    let cartItem = req.session.cart.update(productId, quantity);
    res.json(cartItem);
});

router.delete('/', (req, res) => {
    let productId = req.body.id;
    req.session.cart.remove(productId);
    res.json({
        totalQuantity: req.session.cart.totalQuantity,
        totalPrice: req.session.cart.totalPrice
    });
});

router.delete('/all', (req, res) => {
    req.session.cart.empty();
    res.sendStatus(204);
    res.end();
});

module.exports = router;