const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
// const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express()

app.set('view engine', 'ejs')

function customMiddleware(req, res, next) {
    if (req.url === '/help') {
        res.send('<h1>Help is blocked</h1>')
        console.log(1);
    }
    next()
}

function Logger() {
    return (req, res, next) => {
        console.log(`this is-----${req.method} - ${req.url}`);
        next()
    }
}

const middleware = [
    customMiddleware,
    Logger(),
    // cookieParser(),
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }),
    flash()
]
app.use(middleware)

function x(req, res, next) {
    console.log(2);
}
app.get('/about', morgan('dev'), (req, res) => {
    res.send('<h1>About MiddleWare</h1>')
})



app.get('/flash', (req, res, next) => {
    req.flash('info', 'Flash Information Medul Hasan')
    // console.log(req.flash());
    res.render('pages/views', {
        message: req.flash('info')
    })
})

// app.get('/abc', (req, res, next) => {
//     res.render('pages/views', {
//         message: req.flash('info')
//     })
// })



app.get('/help', x, (req, res) => {
    res.send('<h1>Help MiddleWare</h1>')
})
app.get('/', (req, res) => {
    res.send('<h1>Hello MiddleWare anf Flash Message</h1>')
})
app.get('*', (req, res) => {
    res.send('<h1>404 Not Fount</h1>')
})

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log(`Server is Running ouport ${PORT}`);
})