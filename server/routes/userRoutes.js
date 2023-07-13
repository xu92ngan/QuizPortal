const router = require('express').Router();
const { registerUser } = require('../../server/controllers/userController');

router.post('/register', registerUser);

module.exports = router;
