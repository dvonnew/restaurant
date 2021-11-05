import './style.css';

class Home{

    constructor(){
        this.reviews = []
    }

    loadBodyContent(){

        const content = document.getElementById('content')
        
        content.appendChild(this.createAboutSection())

        content.appendChild(this.createHoursSection())

        content.appendChild(this.createReviewsSection())

        addReviewButton.addEventListener('click', ()=>{
            this.clearReviews()
            this.addReview()
            reviewsDisplay.appendChild(this.createReviewsContent())
        })

        return content
    }

    createAboutSection(){

        const about = document.createElement('div')
        about.id = 'description'
        about.innerHTML = `Welcome to Big D's Mile High Cafe. One of the few places that'll take you higher while
        you're flying high. Located in the heart of Denver's Capitol Hill neighborhood, serving a assortment of some of 
        your favorite munchies. Drop on by and come get high!`

        return about
    }

    createHoursSection(){

        const days = {'Sunday': '9AM-6PM', 'Monday': '9AM-6PM', 'Tuesday': '9AM-6PM', 
        'Wednesday': '9AM-6PM', 'Thursday': '9AM-6PM', 'Friday': '9AM-6PM', 'Saturday': '9AM-6PM'}
        const hoursBox = document.createElement('div')
        const hours = document.createElement('div')
        const hoursHeading = document.createElement('h3')

        hours.id = 'hours'

        hoursHeading.id = 'hoursHeading'
        hoursHeading.innerHTML = 'Hours'

        hoursBox.id = 'hoursBox'
        hoursBox.appendChild(hoursHeading)
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
        
        const reviewsDisplay = document.createElement('div')
        
        reviewsDisplay.id = 'reviewsDisplay'

        reviewsDisplay.appendChild(this.createReviewsHeader())
        reviewsDisplay.appendChild(this.createReviewsContent())

        return reviewsDisplay
    }

    createReviewsHeader(){
        
        const reviewsHeaderBox = document.createElement('div')
        const reviewsHeader = document.createElement('div')
        const addReviewButton = document.createElement('button')

        reviewsHeader.innerHTML = 'Reviews'
        reviewsHeader.id = 'reviewsHeader'

        addReviewButton.innerHTML = 'Write A Review'
        addReviewButton.id = 'addReviewButton'

        reviewsHeaderBox.id = 'reviewsHeaderBox'
        reviewsHeaderBox.appendChild(reviewsHeader)
        reviewsHeaderBox.appendChild(addReviewButton)

        return reviewsHeaderBox
    }

    createReviewsContent(){

        const reviewsContentbox = document.createElement('div')

        reviewsContentbox.id = 'reviewsContentBox'

        this.reviews.forEach(review => {
            const reviewContent = document.createElement('div')
            const reviewText = document.createElement('div')
            const rating = document.createElement('div')

            reviewText.id = 'review'
            reviewText.innerHTML = review.review

            rating.id = 'rating'
            rating.innerHTML = `${review.rating}/5`

            reviewContent.id = 'reviewContent'
            reviewContent.appendChild(reviewText)
            reviewContent.appendChild(rating)

            reviewsContentbox.appendChild(reviewContent)
        });
        return reviewsContentbox
    }

    clearReviews(){

        const reviewsDisplay = document.getElementById('reviewsDisplay')
        const reviewsContentBox = document.getElementById('reviewsContentBox')

        reviewsDisplay.removeChild(reviewsContentBox)
        
    }

    addReview(){
        let reviewDescription = prompt('Please type review here')
        let score = prompt('please provide a score out of 5')
        let review = new Review(reviewDescription, score)

        this.reviews.push(review)
    }
}

class Review {
    constructor(review, rating){
        this.review = review
        this.rating = rating
    }
}

export {Home}