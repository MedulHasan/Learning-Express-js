const router = require('express').Router()
let {
    getAllContact,
    getContactById,
    createContact,
    updateContact,
    deleteContact
} = require('./controllet')

router.get('/', getAllContact)
router.get('/:id', getContactById)
router.get('/delete/:id', deleteContact)
router.post('/', createContact)
router.put('/:id', updateContact)
// router.delete('/:id', deleteContact)

module.exports = router