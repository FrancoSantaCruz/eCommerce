const {Router} = require('express');
const { index, create, show } = require('../controllers/register');
const router = Router();
const path = require('path');

router.get('/register', index);

router.post('/register/guardar', create);

router.get('/users', show);


module.exports = router;