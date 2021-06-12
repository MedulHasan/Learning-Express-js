const router = require('express').Router()
const { getAllContract, postNewContract, getSingleContract, deleteContract, updateContract } = require('../controllers/contactController')

const { authenticate } = require('../middleware/authenticate')

router.get('/', getAllContract)
router.post('/', authenticate, postNewContract)
router.get('/:id', getSingleContract)
router.put('/:id', updateContract)
router.delete('/:id', deleteContract)

module.exports = router