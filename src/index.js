import {HomePage} from './homePageLoad'
import {ContactsPage} from './contacts'
import {MenuPage} from './menu'

let homePage = new HomePage
let contacts = new ContactsPage
let menu = new MenuPage

homePage.pageLoad()
homePage.loadBodyContent()

const homeButton = document.getElementById('Home')
homeButton.addEventListener('click', ()=>{
    clearDom()
    homePage.loadBodyContent()
})

const menuButton = document.getElementById('Menu')
menuButton.addEventListener('click', ()=>{
    clearDom()
    menu.loadBodyContent()

})

const contactButton = document.getElementById('Contacts')
contactButton.addEventListener('click', ()=>{
    clearDom()
    contacts.loadContactInfo()

})

function clearDom(){

    const content = document.getElementById('content')

    while (content.hasChildNodes()){
        content.removeChild(content.lastChild)
    }

}
