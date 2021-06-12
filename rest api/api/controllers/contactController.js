const Contact = require('../models/contactsModel')

exports.getAllContract = (req, res, next) => {
    Contact.find()
        .then(contacts => {
            res.status(200).json(contacts)
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                message: "Error ....",
                error: e
            })
        })
}

exports.postNewContract = (req, res, next) => {
    let contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })

    contact.save()
        .then(data => {
            res.status(201).json({
                data
            })
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                message: "Error ....",
                error: e
            })
        })
}

exports.getSingleContract = (req, res, next) => {
    let id = req.params.id

    Contact.findById(id)
        .then(contact => {
            res.status(200).json({ contact })
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                message: "Error ....",
                error: e
            })
        })
}

exports.updateContract = async (req, res, next) => {
    let id = req.params.id
    let updatedContact = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }

    Contact.findByIdAndUpdate(id, { $set: updatedContact })
        .then(data => {
            Contact.findById(id)
                .then(newdata => {
                    res.json({
                        message: 'update SuccessFully',
                        newdata
                    })
                })
        })
        .catch(e => {
            console.log(e)
            res.status(500).json({
                message: "Error ....",
                error: e
            })
        })
}

exports.deleteContract = async (req, res, next) => {
    let id = req.params.id

    try {
        let dltCnt = await Contact.findOneAndDelete(id)
        res.json({
            message: 'Contract Remove',
            dltCnt
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Error ....",
            error: e
        })
    }
}