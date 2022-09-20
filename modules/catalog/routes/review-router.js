const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/review-controller');
const AuthenticateMiddleware = require('../../customer/middlewares/authenticate');

router.post('/', AuthenticateMiddleware.isLoggedIn, async (req, res, next) => {
    try {
        let review = {
            customer_id: req.session.customer.id,
            product_id: req.body.product_id,
            rating: req.body.rating,
            message: req.body.message
        };
        await ReviewController.add(review);
        res.redirect('/products/' + review.product_id);
    } catch (error) {
        next(error);
    }
});


module.exports = router;