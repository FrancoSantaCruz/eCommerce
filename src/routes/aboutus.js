const {Router} = require('express');
const {index} = require('../controllers/aboutus');
const router = Router();

router.get('/aboutus', index);

module.exports = router;