const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  home
} = require('../controllers/authController')
// const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
// router.get('/', protect, home)

module.exports = router
