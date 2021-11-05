import {PageLoad} from './pageLoad'
import {Home} from './homePage'
import {ContactsPage} from './contacts'
import {MenuPage} from './menu'

let page = new PageLoad
let home = new Home
let contacts = new ContactsPage
let menu = new MenuPage

page.pageLoad()
home.loadBodyContent()

const homeButton = document.getElementById('homeButton')
const menuButton = document.getElementById('menuButton')
const contactButton = document.getElementById('contactsButton')


homeButton.addEventListener('click', ()=>{
    clearDom()
    home.loadBodyContent()
})

menuButton.addEventListener('click', ()=>{
    clearDom()
    menu.loadBodyContent()

})

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
