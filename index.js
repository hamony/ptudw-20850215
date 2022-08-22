const express = require('express');
const expressHbs = require('express-handlebars');
const app = express();
const productCatalog = require('./modules/productCatalog/routes/productCatalog');

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: { allowProtoPropertiesByDefault: true }
}));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));
app.use('/products', productCatalog);

app.get('/', (req, res) => {
    res.render('index');
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});