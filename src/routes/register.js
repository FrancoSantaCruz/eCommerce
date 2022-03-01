const {Router} = require('express');
const { index, create, show } = require('../controllers/register');
const regValidations = require('../middlewares/regValidation');
const router = Router();
const path = require('path');
const { check } = require('express-validator');

router.get('/register', index);

router.post('/register/guardar', regValidations, create);

router.get('/users', show);


module.exports = router;