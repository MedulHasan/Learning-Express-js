class Play {
    constructor() {
        this.cont = [
            {
                id: 1
            },
            {
                id: 2
            },
            {
                id: 3
            },
            {
                id: 4
            }
        ]
    }

    man(id) {
        let x = this.cont.filter(contact => contact.id !== id)
        console.log(x);
    }

}

let a = new Play()
a.man(2)