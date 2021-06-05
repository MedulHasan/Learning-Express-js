const express = require('express')
const morgan = require('morgan')
const path = require('path')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')

const app = express()
app.use(morgan('dev'))

app.use('/user', userRouter)
app.use('/post', postRouter)

app.get('/product/:prodid/review/:revid', (req, res) => {
    res.send('Prod Id = ' + req.params.prodid + ' and reviw = ' + req.params.revid)
})

app.get('/', (req, res) => {
    res.send('<h1>Hello Routes</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Fount</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is Running ouport ${PORT}`);
})