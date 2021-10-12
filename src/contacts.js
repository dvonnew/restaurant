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

        const contactInfo = document.createElement('p')
        contactInfo.innerHTML = `P: 555-555-6969 \n E: BigDsCafe@bigd.com`
        contactInfoBox.appendChild(contactInfo)

    }
}

export {ContactsPage}