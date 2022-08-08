const {Router} = require('express');
const router = Router();
const path = require('path');
const { check } = require('express-validator');

const {RegIndex, RegCreate, RegShow, ProfileIndex, LogIndex, LogProcess} = require('../controllers/users');


const regValidations = require('../middlewares/regValidation');
const guestMiddleware = require('../middlewares/guestMiddleware');
const logValidations = require('../middlewares/logValidation');

//Esta ruta sería solo para administradores
//router.get('/', RegShow);


//Registro
router.get('/register', guestMiddleware, RegIndex);
router.post('/register/guardar', regValidations, RegCreate);

//Login

router.get('/login', LogIndex);
router.post('/login', logValidations, LogProcess);

//Ver perfil
router.get('/:id', ProfileIndex);



module.exports = router;