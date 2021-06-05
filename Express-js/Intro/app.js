const express = require('express')

const app = express()


app.get('/about', (req, res) => {
    // res.send('<h1>About Page</h1>')
    res.json({
        name: 'medul'
    })
})

app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

//root route always last
app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`The server is Running on port ${PORT}`);
})