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

        const pageLinkHome = document.createElement('button')
        pageLinkHome.innerHTML = 'Home'
        pageLinkHome.id = 'Home'
        navBar.appendChild(pageLinkHome)
        
        const pageLinkMenu = document.createElement('button')
        pageLinkMenu.innerHTML = 'Menu'
        pageLinkMenu.id ='Menu'
        navBar.appendChild(pageLinkMenu)

        const pageLinkContacts = document.createElement('button')
        pageLinkContacts.innerHTML = 'Contacts'
        pageLinkContacts.id = 'Contacts'
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

        const hoursBox = document.createElement('div')
        hoursBox.id = 'hoursBox'
        content.appendChild(hoursBox)
        const hoursHeading = document.createElement('h3')
        hoursHeading.id = 'hoursHeading'
        hoursHeading.innerHTML = 'Hours'
        hoursBox.appendChild(hoursHeading)
        this.createHoursSection()

        const reviewsBox = document.createElement('div')
        reviewsBox.id = 'reviewsBox'
        content.appendChild(reviewsBox)
        this.createReviewsSection()

        return content
    
    }

    createHoursSection(){
        
        const days = {'Sunday': '9AM-6PM', 'Monday': '9AM-6PM', 'Tuesday': '9AM-6PM', 
        'Wednesday': '9AM-6PM', 'Thursday': '9AM-6PM', 'Friday': '9AM-6PM', 'Saturday': '9AM-6PM'}
        const hoursBox = document.getElementById('hoursBox')
        const hours = document.createElement('div')
        hours.id = 'hours'
        hoursBox.appendChild(hours)
        
        for (this.i=0; this.i < 7; this.i++){
            const li = document.createElement('li')
            li.id = Object.keys(days)[this.i]
            li.innerHTML = `${Object.keys(days)[this.i]}: ${Object.values(days)[this.i]}`
            hours.appendChild(li)
        }

    } 

    createReviewsSection(){
        
        const reviewBox = document.getElementById('reviewsBox')

        const reviewsTitle = document.createElement('h3')
        reviewsTitle.innerHTML = 'Reviews'
        reviewBox.appendChild(reviewsTitle)

        const review = document.createElement('div')
        review.id = 'review'
        reviewBox.appendChild(review)

        const reviewScore = document.createElement('p')
        reviewScore.id = 'score'
        reviewScore.innerHTML = '4/5'
        review.appendChild(reviewScore)

        const reviewText = document.createElement('p')
        reviewText.id = 'reviewText'
        reviewText.innerHTML = `This place has the dankest dank for the greenie high time foods. You can get it all, breakfast lunch and dinner.
        Simply amazing.`
        review.appendChild(reviewText)
    }

}

export {HomePage}