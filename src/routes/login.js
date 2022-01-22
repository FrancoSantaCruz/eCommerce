const {Router} = require('express');
const {index} = require('../controllers/login');
const router = Router();

router.get('/login', index);

module.exports = router;