const {Router} = require('express');
const { index, create, show } = require('../controllers/register');
const regValidations = require('../middlewares/regValidation');
const guestMiddleware = require('../middlewares/guestMiddleware');
const router = Router();
const path = require('path');
const { check } = require('express-validator');

router.get('/register', guestMiddleware, index);

router.post('/register/guardar', regValidations, create);

router.get('/users', show);


module.exports = router;