const express = require('express');
const path = require('path');
const session = require('express-session');
const cookie = require('cookie-parser');
const method = require('method-override');
const app = express();

const listen = () => console.log('listening on port 3000');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'./views'));

app.listen(app.get('port'),listen);

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../uploads')));
app.use(method('_method'));
app.use(cookie());
app.use(session({
    secret: 'sequelize class',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(require('./routes/main'));
app.use(require('./routes/register'));
app.use(require('./routes/login.js'));
app.use(require('./routes/cart'));
app.use(require('./routes/product_detail'));
app.use(require('./routes/aboutus'));
