const {Router} = require('express');
const {index, create, show, storage, update, modify} = require('../controllers/products');
const router = Router();

//---------------------------
//-------- POR GET ----------
//---------------------------

router.get('/', index);
//Agregar un producto.
router.get('/create', create);
//Editar un producto en especifico.
router.get('/edit/:id', update);
//Mostrar un producto a elección.
router.get('/:id', show);


//---------------------------
//-------- POR POST ----------
//---------------------------

//Boton de guardado al crear el producto
router.post('/save', storage);

//---------------------------
//-------- POR PUT ----------
//---------------------------

//guarda los datos actualizados.
router.put('/update', modify);

module.exports = router;