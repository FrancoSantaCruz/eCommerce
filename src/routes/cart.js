const {Router} = require('express');
const {index} = require('../controllers/cart');
const router = Router();

router.get('/cart', index);

module.exports = router;