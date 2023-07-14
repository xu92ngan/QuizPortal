const router = require('express').Router();
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require('../../server/controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-user-info', protect, getUserInfo);

module.exports = router;
