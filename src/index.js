import {HomePage} from './pageLoad'

let homePage = new HomePage

function clearDom(){

    const content = document.getElementById('content')
    while (content.hasChildNodes()){
        content.removeChild()
    }

}

homePage.pageLoad()