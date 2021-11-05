import './style.css';

class ContactsPage{

    constructor(){
    }

    loadContactInfo(){

        const content = document.getElementById('content')
        const contactBox = document.createElement('div')
        const contactHeaderBox  = document.createElement('div')
        const header = document.createElement('h2')
        const contactInfoBox = document.createElement('div')
        const contactInfoPhone = document.createElement('p')
        const contactInfoEmail = document.createElement('p')
        const contactInfoLocation = document.createElement('p')

        contactBox.id = 'contactInfoBox'
        content.appendChild(contactBox)

        contactBox.appendChild(contactHeaderBox)
        header.id = 'contactHeader'
        header.innerHTML = 'CONTACT INFO'
        
        contactHeaderBox.appendChild(header)

        contactBox.appendChild(contactInfoBox)

        contactInfoPhone.innerHTML = `P: 555-555-6969`
        
        contactInfoEmail.innerHTML = `E: BigDsCafe@bigd.com`

        contactInfoLocation.innerHTML = `L: Denver, CO 80212`

        contactInfoBox.appendChild(contactInfoPhone)
        contactInfoBox.appendChild(contactInfoEmail)
        contactInfoBox.appendChild(contactInfoLocation)

    }
}

export {ContactsPage}