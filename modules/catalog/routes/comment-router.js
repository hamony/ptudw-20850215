const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment-controller');
const AuthenticateMiddleware = require('../../customer/middlewares/authenticate');

router.post('/', AuthenticateMiddleware.isLoggedIn, async (req, res, next) => {
    try {
        let comment = {
            customer_id: req.session.customer.id,
            product_id: req.body.product_id,
            message: req.body.message
        };
        if (!isNaN(req.body.parent_id) || req.body.parent_id != '') {
            comment.parent_id = req.body.parent_id;
        }

        await CommentController.add(comment);
        res.redirect('/products/' + comment.product_id);
    } catch (error) {
        next(error);
    }
});


module.exports = router;