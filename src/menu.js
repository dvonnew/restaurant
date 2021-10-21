import './style.css';

class MenuPage{
    constructor(){
        this.Menu = {
            'The Classic': `Sausage, Egg and Cheddar Cheese on an Everything Bagel, seasoned with salt and pepper  -  $6.79`,
            'The Bacon, Egg, and Cheese': `Thick Cut Bacon, Egg, Cheddar Cheese on an Everything Bagel, seasoned with salt and pepper  -  $6.79`,
            'The Chorizo Sunrise': `Chorizo, Egg, Jalapeño Cream Cheese, Avocado and Cheddar on a Jalapeño Cheddar Bagel  -  $7.79`,
            'The Veg': `Tomato, Arugula, Egg and Cheddar Cheese on an Everything Bagel  -  $5.79`,
            'The Ham and Swiss': `Ham, Egg and Swiss Cheese on an English Muffin  - $6.50`,
            "Big D's Burrito": `Sausage, Bacon, Potatoes, Onions, Eggs, Pork Green Chili, all wrapped in our homemade flour tortilla  - $8.50`,
            'The Classic Burger': `Ground Beef patty, American Cheese, Lettuce, Tomato, served on a dank Brioche Bun  -  $11.50`,
            'Chicken Caesar Wrap': `Grilled Chicken, tossed in some house made Caesar dressing, crotons, lettuce and parmesan cheese, wrapped in our homemade flour tortilla  - $10.50`,
            'The Hot Chicken Sammy': `Nashville hot fried chicken, a couple pickles, and on a classic homemade bun  - $10.50`,
            'Classic Chicken Sammy': `Can’t take the heat? Then try this fried chicken sammy. Same as above without the heat.  - $10.50`,
            'Salmon Burger': 'Homemade salmon burger thrown together with fresh salmon, lemon juice, green onions, and panko breadcrumbs, on that homemade brioche  -  $11.50'

        }


    }

    loadBodyContent(){
        const content = document.getElementById('content')
        content.appendChild(this.createMenu())
    }

    createMenu (){

        const table = document.createElement('table')
        
        const tHead = document.createElement('thead')
        tHead.innerHTML= 'Menu'
        table.appendChild(tHead)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        for (this.i=0; this.i< 11; this.i++){
            let tr = tbody.insertRow()
            tr.id = this.i
            tr.innerHTML = `${Object.keys(this.Menu)[this.i]}: ${Object.values(this.Menu)[this.i]}`
            
        }

        return table

    }
}

export {MenuPage}