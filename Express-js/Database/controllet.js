const Contact = require('./Contact')

exports.getAllContact = (req, res) => {
    Contact.find()
        .then(contacts => {
            res.render('index', { contacts, error: {} })
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occures'
            })
        })
}
exports.getContactById = (req, res) => {
    let { id } = req.params
    Contact.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occures'
            })
        })
}
exports.createContact = (req, res) => {
    let { name, email, phone, id } = req.body

    let error = {}

    if (!name) {
        error.name = 'Please Provide Your Name'
    }
    if (!email) {
        error.email = 'Please Provide Your Email'
    }
    if (!phone) {
        error.phone = 'Please Provide Your Phone Number'
    }

    let isError = Object.keys(error).length > 0

    if (isError) {
        Contact.find()
            .then(contacts => {
                return res.render('index', { contacts, error })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    message: 'Error Occured'
                })
            })
    }
    else {
        if (id) {
            Contact.findOneAndUpdate(
                { _id: id },
                {
                    $set: {
                        name,
                        email,
                        phone
                    }
                }
            ).then(() => {
                Contact.find()
                    .then(contacts => {
                        res.render('index', { contacts, error: {} })
                    })
            }).catch(e => {
                console.log(e)
                return res.json({
                    message: 'Error Occured'
                })
            })
        } else {
            let contact = new Contact({
                name,
                email,
                phone
            })

            contact.save()
                .then(() => {
                    Contact.find()
                        .then(contacts => {
                            return res.render('index', { contacts, error: {} })
                        })
                })
                .catch(e => {
                    console.log(e)
                    return res.json({
                        message: 'Error Occured'
                    })
                })
        }
    }


}
exports.updateContact = (req, res) => {
    let { id } = req.params
    let { name, email, phone } = req.body
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name,
                email,
                phone
            }
        },
        { new: true }
    )
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occured'
            })
        })
}
exports.deleteContact = (req, res) => {
    let { id } = req.params
    Contact.findOneAndDelete({ _id: id })
        .then(() => {
            Contact.find()
                .then(contacts => {
                    res.render('index', { contacts, error: {} })
                })
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occured'
            })
        })
}