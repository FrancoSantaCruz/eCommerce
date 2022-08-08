const {Router} = require('express');
const {index, errors, aboutus} = require('../controllers/main');
const router = Router();

router.get('/', index);
router.get('/errors', errors);
router.get('/aboutus', aboutus);

module.exports = router;