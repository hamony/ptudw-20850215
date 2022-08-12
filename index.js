const express = require('express');
const expressHbs = require('express-handlebars');
const app = express();

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:page', (req, res) => {
    const banners = {
        blog: 'Our Blog',
        category: 'Shop Category',
        cart: 'Shopping Cart',
        checkout: 'Product Checkout',
        confirmation: 'Order Confirmation',
        contact: 'Contact Us',
        login: 'Login / Register',
        register: 'Register',
        'single-blog': 'Blog Details',
        'single-product' : 'Shop Single',
        'tracking-order' : 'Order Tracking'
    };
    let page = req.params.page;
    res.render(page, { banner: banners[page] });
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});