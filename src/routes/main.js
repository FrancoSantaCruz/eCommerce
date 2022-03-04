const {Router} = require('express');
const {index, errors} = require('../controllers/main');
const router = Router();

router.get('/', index);

router.get('/errors', errors);

module.exports = router;