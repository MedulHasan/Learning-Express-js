const router = require('express').Router()
// User Route
router.get('/login', (req, res) => {
    res.send('I am Login user Route')
})
router.get('/logout', (req, res) => {
    res.send('I am Logout user Route')
})
router.get('/signin', (req, res) => {
    res.send('I am signin user Route')
})
// User Route end

module.exports = router