const {Router} = require('express');
const {index} = require('../controllers/product_detail');
const router = Router();

router.get('/products', index);

module.exports = router;