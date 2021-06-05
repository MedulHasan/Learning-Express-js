const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()
app.use(morgan('dev'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contacts', router)

// const Schema = mongoose.Schema
// let testSchema = new Schema({
//     name: String
// })

// let Test = mongoose.model('Test', testSchema)

app.get('/', (req, res) => {
    // let test = new Test({
    //     name: 'Medul'
    // })

    // test.save()
    //     .then((t) => {
    //         res.json(t)
    //     })
    //     .catch((e) => {
    //         console.log(e)
    //         res.status(500).json({
    //             error: 'Error Occured'
    //         })
    //     })
})

const PORT = process.env.PORT || 8080
mongoose.connect(`mongodb+srv://user1:pass1@cluster0.wa1q4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(e => {
        console.log(e);
    })