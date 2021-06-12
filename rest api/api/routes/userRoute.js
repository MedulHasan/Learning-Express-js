const router = require('express').Router()
const { registerController, getAllUser, loginController } = require('../controllers/userController')
const { authenticate } = require('../middleware/authenticate')

router.post('/login', loginController)
router.post('/signup', registerController)
router.get('/', authenticate, getAllUser)

module.exports = router