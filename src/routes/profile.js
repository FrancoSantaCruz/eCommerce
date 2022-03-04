const {Router} = require('express');
const {index} = require('../controllers/profile');
const router = Router();

router.get('/profile/:id', index);

module.exports = router;