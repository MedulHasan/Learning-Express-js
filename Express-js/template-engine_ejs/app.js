const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Page' })
})

app.get('/help', (req, res) => {
    res.render('pages/help', { title: 'Help Page' })
})

app.get('/', (req, res) => {
    let post = {
        name: 'Medul',
        email: 'medul@gmail',
        x: true
    }
    let posts = [
        { title: 'One', author: 'Medul' },
        { title: 'Two', author: 'Shafayet' },
        { title: 'Three', author: 'Abiha' },
        { title: 'Four', author: 'Shefa' }
    ]
    res.render('pages/index', { title: "Home", post: post, posts })
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Fount</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is Running ouport ${PORT}`);
})