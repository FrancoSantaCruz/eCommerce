const {Router} = require('express');
const {index, create, show, storage} = require('../controllers/products');
const router = Router();

//---------------------------
//-------- POR GET ----------
//---------------------------

router.get('/', index);
//Agregar un producto.
router.get('/create', create);
//Mostrar un producto a elección
router.get('/:id', show);


//---------------------------
//-------- POR POST ----------
//---------------------------

//Boton de guardado al crear el producto
router.post('/save', storage);


module.exports = router;