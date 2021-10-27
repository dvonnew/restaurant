import './style.css';
import plateImage from './fine-dining.jpeg';

class HomePage {
    
    constructor(){
        this.layout = document.getElementById('layout')
        this.header = document.createElement('header')

    }

    pageLoad(){

        this.loadHeaderContent()

        const content = document.createElement('div')
        content.id = 'content'
        this.layout.appendChild(content)

        const addReviewButton = document.getElementById('addReviewButton')
    
    }

    loadHeaderContent(){

        const headline = document.createElement('h1')
        headline.innerHTML = `BIG D'S MILE HIGH CAFE`
        this.header.appendChild(headline)

        this.loadNavBarContent()

        this.layout.appendChild(this.header)

    }

    loadNavBarContent(header){

        const navBarBox = document.createElement('div')
        navBarBox.id = 'navBarBox'
        this.header.appendChild(navBarBox)

        const pageLinkHome = document.createElement('button')
        pageLinkHome.innerHTML = 'Home'
        pageLinkHome.id = 'homeButton'
        navBarBox.appendChild(pageLinkHome)
        
        const pageLinkMenu = document.createElement('button')
        pageLinkMenu.innerHTML = 'Menu'
        pageLinkMenu.id ='menuButton'
        navBarBox.appendChild(pageLinkMenu)

        const pageLinkContacts = document.createElement('button')
        pageLinkContacts.innerHTML = 'Contacts'
        pageLinkContacts.id = 'contactsButton'
        navBarBox.appendChild(pageLinkContacts)
    }
    
    loadBodyContent(){

        const content = document.getElementById('content')
        
        const description = document.createElement('div')
        description.id = 'description'
        description.innerHTML = `Welcome to Big D's Mile High Cafe. One of the few places that'll take you higher while
        you're flying high. Located in the heart of Denver's Capitol Hill neighborhood, serving a assortment of some of 
        your favorite munchies. Drop on by and come get high!`
        content.appendChild(description)

        content.appendChild(this.createHoursSection())

        content.appendChild(this.createReviewsSection())

        addReviewButton.addEventListener('click', ()=>{
            this.addReview()
        })

        return content
    
    }

    createHoursSection(){

        const hoursBox = document.createElement('div')
        hoursBox.id = 'hoursBox'
        const hoursHeading = document.createElement('h3')
        hoursHeading.id = 'hoursHeading'
        hoursHeading.innerHTML = 'Hours'
        hoursBox.appendChild(hoursHeading)
        
        const days = {'Sunday': '9AM-6PM', 'Monday': '9AM-6PM', 'Tuesday': '9AM-6PM', 
        'Wednesday': '9AM-6PM', 'Thursday': '9AM-6PM', 'Friday': '9AM-6PM', 'Saturday': '9AM-6PM'}
        const hours = document.createElement('div')
        hours.id = 'hours'
        hoursBox.appendChild(hours)
        
        for (this.i=0; this.i < 7; this.i++){
            const li = document.createElement('li')
            li.id = Object.keys(days)[this.i]
            li.innerHTML = `${Object.keys(days)[this.i]}: ${Object.values(days)[this.i]}`
            hours.appendChild(li)
        }

        return hoursBox

    } 


    createReviewsSection(){
        
        const reviewsBox = document.createElement('div')
        reviewsBox.id = 'reviewsBox'

        const reviewsTable = document.createElement('table')
        reviewsTable.id = 'reviewsTable'
        reviewsBox.appendChild(reviewsTable)

        const tHead = document.createElement('thead')
        tHead.id = 'reviewsTableHeader'
        reviewsTable.appendChild(tHead)

        const addReviewButton = document.createElement('button')
        addReviewButton.id = 'addReviewButton'
        addReviewButton.innerHTML = 'Add Review'

        // Adding table heading including button
        const tableHeading = tHead.insertRow()
        const tableTitle = document.createElement('th')
        tableTitle.id = 'reviewTitleTH'
        tableHeading.appendChild(tableTitle)
        tableHeading.id = 'reviewTR'
        tableTitle.innerHTML = 'Reviews'
        const tableAddReview = document.createElement('th')
        tableAddReview.id = 'addReviewTH'
        tableHeading.appendChild(tableAddReview)
        tableAddReview.appendChild(addReviewButton)

        const tbody = document.createElement('tbody')
        tbody.id = 'reviewsTBODY'
        reviewsTable.appendChild(tbody)

        return reviewsBox
    }

    addReview(){

        const reviewsTable = document.getElementById('reviewsTBODY')

        let review = prompt('Please write review here:')
        let score = prompt('Please provide a score of out of 5')

        const reviewRow = reviewsTable.insertRow()
        reviewRow.id = 'reviewRow'
        
        const reviewCell = reviewRow.insertCell()
        reviewCell.innerHTML = review

        const scoreCell = reviewRow.insertCell()
        scoreCell.innerHTML = `${score}/5`        
        
    }

}

export {HomePage}