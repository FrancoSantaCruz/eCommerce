const {Router} = require('express');
const {index} = require('../controllers/register');
const router = Router();

router.get('/register', index);

module.exports = router;