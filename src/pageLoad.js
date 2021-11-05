import './style.css';

class PageLoad {
    
    constructor(){
        this.layout = document.getElementById('layout')
        this.header = document.createElement('header')

    }

    pageLoad(){

        const content = document.createElement('div')
        
        this.loadHeaderContent()

        content.id = 'content'
        this.layout.appendChild(content)

    }

    loadHeaderContent(){

        const headline = document.createElement('h1')
        
        headline.innerHTML = `BIG D'S MILE HIGH CAFE`
        
        this.header.appendChild(headline)
        this.header.appendChild(this.loadNavBarContent())
        this.layout.appendChild(this.header)

    }

    loadNavBarContent(){

        const navBarBox = document.createElement('div')
        const pageLinkHome = document.createElement('p')
        const pageLinkMenu = document.createElement('p')
        const pageLinkContacts = document.createElement('p')

        pageLinkHome.innerHTML = 'Home'
        pageLinkHome.id = 'homeButton'
        
        pageLinkMenu.innerHTML = 'Menu'
        pageLinkMenu.id ='menuButton'

        pageLinkContacts.innerHTML = 'Contacts'
        pageLinkContacts.id = 'contactsButton'

        navBarBox.id = 'navBarBox'
        navBarBox.appendChild(pageLinkHome)
        navBarBox.appendChild(pageLinkMenu)
        navBarBox.appendChild(pageLinkContacts)

        return navBarBox
    }
}

export {PageLoad}