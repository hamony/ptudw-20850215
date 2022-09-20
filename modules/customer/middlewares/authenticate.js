const middleware = {};

middleware.isLoggedIn = (req, res, next) => {
    if (!req.session.customer) {
        return res.redirect(`/customers/login?returnUrl=${req.originalUrl}`);
    }
    next();
};

module.exports = middleware;