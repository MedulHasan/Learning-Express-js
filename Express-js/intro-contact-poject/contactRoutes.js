const router = require('express').Router()
const {
    getAllContact,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} = require('./contactController')

router.get('/', getAllContact)
router.get('/:id', getContactById)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router