const {Router} = require('express');
const {index, processLogin} = require('../controllers/login');
const router = Router();
const logValidations = require('../middlewares/logValidation');
const { check } = require('express-validator');

router.get('/login', index);

router.post('/login', logValidations, processLogin);

module.exports = router;
