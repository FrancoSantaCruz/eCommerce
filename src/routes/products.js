const {Router} = require('express');
const {index} = require('../controllers/products');
const router = Router();

router.get('/', index);

//Agregar un producto.
//router.get('/create', );

//Mostrar un producto a elección
//router.get('/:id', show);

//Boton de guardado al crear el producto
//router.post('/save', storage);


module.exports = router;