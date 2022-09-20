var createError = require('http-errors');
const express = require('express');
const expressHbs = require('express-handlebars');
const app = express();
const { createStarList, createStars } = require('./modules/catalog/helpers/star');
const { createColorsList } = require('./modules/catalog/helpers/attribute');
const hdbPaginate = require('express-handlebars-paginate');
const Cart = require('./modules/catalog/controllers/cart-controller');
// Include route
const ProductRouter = require('./modules/catalog/routes/product-router');
const IndexRouter = require('./modules/catalog/routes/index-router');
const CartRouter = require('./modules/catalog/routes/cart-router');
const CommentRouter = require('./modules/catalog/routes/comment-router');
const ReviewRouter = require('./modules/catalog/routes/review-router');
const CustomerRouter = require('./modules/customer/routes/customer-router');

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: { allowProtoPropertiesByDefault: true },
    helpers: {
        createStarList: createStarList,
        createStars: createStars,
        createColorsList: createColorsList,
        createPagination: hdbPaginate.createPagination
    }
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

let session = require('express-session');
app.use(session({
    cookie: {httpOnly: true, maxAge: null},
    secret: 'S3cret',
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    req.session.cart = cart;
    res.locals.totalQuantity = cart.totalQuantity;
    res.locals.usename = req.session.customer ? req.session.customer.username : '';
    res.locals.fullname = req.session.customer ? req.session.customer.fullname : '';
    res.locals.isLoggedIn = req.session.customer ? true : false;
    next();
});
/**
 * Router
 */
app.use('/', IndexRouter);
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);
app.use('/comments', CommentRouter);
app.use('/reviews', ReviewRouter);
app.use('/customers', CustomerRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next){
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});