const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

exports.registerController = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.json({
                err
            })
        }

        let user = new User({
            email,
            password: hash
        })

        user.save()
            .then(result => {
                res.status(201).json({
                    message: 'User Created Successfully',
                    user: result
                })
            })
            .catch(error => {
                res.json(error)
            })
    })
}

exports.getAllUser = (req, res, next) => {
    User.find()
        .then(user => {
            res.json({
                user
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
}

exports.loginController = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password

    User.findOne({ email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            message: 'error ...',
                            err
                        })
                    }

                    if (result) {

                        let token = jwt.sign({ email: user.email, _id: user._id }, 'SECRET', { expiresIn: '2h' })

                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    } else {
                        res.json({
                            message: 'invalid cradential'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'invalid cradential'
                })
            }
        })
}