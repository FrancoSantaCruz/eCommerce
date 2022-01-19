const express = require('express');
const path = require('path');
const app = express(); 

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.listen(app.get('port'), () => console.log('listening on port ' + app.get('port')));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('./middlewares/user'));


app.use(require('./routes/main'));
