import './style.css';

class ContactsPage{

    constructor(){
    }

    loadContactInfo(){

        const content = document.getElementById('content')

        const contactBox = document.createElement('div')
        contactBox.id = 'contactInfoBox'
        content.appendChild(contactBox)

        const contactHeaderBox  = document.createElement('div')
        contactBox.appendChild(contactHeaderBox)
        const header = document.createElement('h2')
        header.id = 'contactHeader'
        header.innerHTML = 'CONTACT INFO'
        contactHeaderBox.appendChild(header)

        const contactInfoBox = document.createElement('div')
        contactBox.appendChild(contactInfoBox)

        const contactInfoPhone = document.createElement('p')
        contactInfoPhone.innerHTML = `P: 555-555-6969`
        contactInfoBox.appendChild(contactInfoPhone)

        const contactInfoEmail = document.createElement('p')
        contactInfoEmail.innerHTML = `E: BigDsCafe@bigd.com`
        contactInfoBox.appendChild(contactInfoEmail)

        const contactInfoLocation = document.createElement('p')
        contactInfoLocation.innerHTML = `L: Denver, CO 80212`
        contactInfoBox.appendChild(contactInfoLocation)

    }
}

export {ContactsPage}