import './style.css';
import plateImage from './fine-dining.jpeg';

class HomePage {
    
    constructor(){
        this.body = document.querySelector('body')
        this.header = document.createElement('header')
    }

    pageLoad(){

        this.loadHeaderContent()

        const content = document.createElement('div')
        content.id = 'content'
        this.body.appendChild(content)

        this.loadBodyContent()
    
    }

    loadHeaderContent(){

        const headline = document.createElement('h1')
        headline.innerHTML = `BIG D'S MILE HIGH CAFE`
        this.header.appendChild(headline)

        this.loadNavBarContent()

        this.body.appendChild(this.header)

    }

    loadNavBarContent(header){

        const navBarBox = document.createElement('div')
        navBarBox.id = 'navBarBox'
        this.header.appendChild(navBarBox)

        const navBar = document.createElement('nav')
        navBarBox.appendChild(navBar)

        const pageLinkHome = document.createElement('li')
        pageLinkHome.innerHTML = 'Home'
        navBar.appendChild(pageLinkHome)
        
        const pageLinkMenu = document.createElement('li')
        pageLinkMenu.innerHTML = 'Menu'
        navBar.appendChild(pageLinkMenu)

        const pageLinkContacts = document.createElement('li')
        pageLinkContacts.innerHTML = 'Contacts'
        navBar.appendChild(pageLinkContacts)
    }
    
    loadBodyContent(){

        const content = document.getElementById('content')
        
        const description = document.createElement('div')
        description.id = 'description'
        description.innerHTML = `Welcome to Big D's Mile High Cafe. One of the few places that'll take you higher while
        you're flying high. Located in the heart of Denver's Capitol Hill neighborhood, serving a assortment of some of 
        your favorite munchies. Drop on by and come get high!`
        content.appendChild(description)

        const hours = document.createElement('div')
        hours.id = 'hours'
        hours.innerHTML = ''
        content.appendChild(hours)

        return content
    
    }

}

export {HomePage}