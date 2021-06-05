const contacts = require('./Contacts')

exports.getAllContact = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.getContactById = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let contact = contacts.getContactById(id)
    res.json(contact)
}

exports.createContact = (req, res) => {
    let { name, email, phone } = req.body
    let contact = contacts.createContact({
        name: name,
        email: email,
        phone: phone
    })
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let { name, email, phone } = req.body
    let contact = contacts.updateContactById(id, {
        name,
        email,
        phone
    })
    res.json(contact)

}

exports.deleteContact = (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    let contact = contacts.deleteContact(id)
    res.json(contact)

}