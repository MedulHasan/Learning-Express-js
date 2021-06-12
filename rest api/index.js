const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const contactRoute = require('./api/routes/contactRoute')
const userRoute = require('./api/routes/userRoute')

const app = express()

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/contacts', contactRoute)
app.use('/api/user', userRoute)

// app.get('/contact', (req, res) => {
//     const contact = new Contact({
//         name: 'Medul Hasan',
//         email: 'medul.cse@gmail.com'
//     })

//     contact.save()
//         .then(data => {
//             res.json(data)
//         })
//         .catch(err => console.log(err.message))
// })

app.get('/', (req, res) => {
    res.send('<h1>Hello Rest Api</h1>')
})

const PORT = process.env.PORT || 3000
mongoose.connect(`mongodb+srv://user1:pass1@cluster0.wa1q4.mongodb.net/rest_api?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database Connected');
            console.log(`Server is Runnong On Port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err.message);
    })