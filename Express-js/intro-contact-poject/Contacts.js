class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    getContactById(id) {
        return this.contacts.find((contact) => {
            return contact.id === id
        })
    }

    createContact(contact) {
        let id = this.contacts.length + 1
        contact.id = id
        this.contacts.push(contact)
        return contact
    }

    updateContactById(id, updateValue) {
        let index = this.contacts.findIndex(contact => contact.id === id)
        this.contacts[index].name = updateValue.name || this.contacts[index].name
        this.contacts[index].email = updateValue.email || this.contacts[index].email
        this.contacts[index].phone = updateValue.phone || this.contacts[index].phone

        return this.contacts[index]
    }

    deleteContact(id) {
        let index = this.contacts.findIndex(contact => contact.id === id)
        let dltContact = this.contacts[index]
        this.contacts = this.contacts.filter(contact => contact.id !== id)
        return dltContact
    }
}

let contacts = new Contacts()
module.exports = contacts