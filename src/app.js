const express = require('express');
const {resolve} = require('path');
const app = express();

const listen = () => console.log('listening on port 3000');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname,'./views'));

app.listen(app.get('port'),listen);

app.use(express.static(resolve(__dirname, '../public')));
app.use(express.static(resolve(__dirname, '../uploads')));

app.use(require('./routes/main'));
app.use(require('./routes/register'));
app.use(require('./routes/login.js'));
app.use(require('./routes/cart'));
app.use(require('./routes/product_detail'));
app.use(require('./routes/aboutus'));
