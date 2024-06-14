let recipes = [
    {
        "name": "Black Widow",
        "tags": [
            "Tart",
            "Lemon",
            "Blackberry",
            "Tequila"
        ],
        "ingredients": [
            "1.5oz Tequila",
            "1oz Lemon Juice",
            "0.5oz Blackberry Rosemary"
        ],
        "directions": [
            "Shake & Strain into a coupe",
            "Garnish with a dried lemon wheel"
        ]
    },
    {
        "name": "Princess Peach",
        "tags": [
            "Sweet",
            "Lemon",
            "Peach",
            "Vodka"
        ],
        "ingredients": [
            "2oz Peach & Orange Blossom Vodka",
            "0.5oz Peach Schnapps",
            "1oz Lemon Juice",
            "0.5 Orange Juice",
            "0.5 Simple Syrup",
        ],
        "directions": [
            "Shake & Pour into a tall glass",
            "Top with sprite",
            "Garnish with a orange wheel half"
        ]
    },
    {
        "name": "Green Tea Shot",
        "tags": [
            "Sour",
            "Lemon",
            "Lime",
            "Peach",
            "Whiskey"
        ],
        "ingredients": [
            "0.75oz Jameson",
            "0.75oz Peach Schnapps",
            "0.75oz Sour Mix",
        ],
        "directions": [
            "Shake & Strain into a shot glass",
        ]
    },
    {
        "name": "Sweet Baby K",
        "tags": [
            "Sweet",
            "Lemon",
            "Peach",
            "Whiskey"
        ],
        "ingredients": [
            "1.5oz Peach Bourbon",
            "1oz Lemon Juice",
            "0.5oz Simple Syrup",
        ],
        "directions": [
            "Shake with mint & Pour into a tall glass",
            "Top with sprite",
            "Garnish with a lime"
        ]
    },
    {
        "name": "Lemon Drop Martini",
        "tags": [
            "Tart",
            "Lemon",
            "Vodka"
        ],
        "ingredients": [
            "1.5oz Vodka",
            "0.75oz Lemon Juice",
            "0.75oz Simple Syrup",
        ],
        "directions": [
            "Shake & Strain into a coupe",
            "Garnish with a lemon wheel"
        ]
    },
    {
        "name": "Margarita",
        "tags": [
            "Sour",
            "Lime",
            "Tequila"
        ],
        "ingredients": [
            "1.5oz Tequila",
            "0.5oz Triple Sec",
        ],
        "directions": [
            "Salt the rip of a tall glass",
            "Build ingredients and top with sour mix",
            "Garnish with lime wedge",
        ]
    },
    
]

let tagColors = {
    'Tart': '#D6F660',
    'Sweet': '#F1948A',
    'Sour': '#BDEA61',
    'Lemon': '#F7DC6F',
    'Lime': '#7DCEA0',
    'Vodka': '#E5E7E9',
    'Tequila': '#E5E7E9',
    'Whiskey': '#E5E7E9',
    'undefined': '#E5E7E9'
}

let seedCount = 2
let i = 0
let mainContainer = document.getElementById("mainContainer")
recipes.forEach( function(recipe) {
    let recipeCardFormat = `
    <div class="card shadow p-3 mb-4 bg-body rounded" style="width: 24rem;">
        <div class="card-body" id="recipe${i+seedCount}">
            <h2 class="card-title" style="margin-bottom: .25rem;">${recipe.name}</h2>
            <div id="tags${i+seedCount}"></div>
            <h5 class="card-text">Ingredients</h5>
            <ul id="ingredients${i+seedCount}"></ul>
            <h5 class="card-text">Directions</h5>
            <ul id="directions${i+seedCount}" style="list-style-type: none;"></ul>
        </div>
    </div>
    `
    // places the recipe card
    let recipeEl = document.createElement('div')
    recipeEl.setAttribute('class', 'col')
    recipeEl.innerHTML = recipeCardFormat
    mainContainer.appendChild(recipeEl)

    // places the tags
    let tagsEl = document.getElementById(`tags${i+seedCount}`)
    recipe.tags.forEach( function(tag) {
        let color = '#E5E7E9'
        if (Object.keys(tagColors).includes(tag)) {
            color = tagColors[tag]
        }
        tagsEl.innerHTML += `<p class="btn btn-light" style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-bottom: .5rem; margin-right: .25rem; background-color: ${color}; border-color: ${color};">${tag}</p>`
    })

    // places the ingredients
    let ingredientsEl = document.getElementById(`ingredients${i+seedCount}`)
    recipe.ingredients.forEach( function(ingredient) {
        ingredientsEl.innerHTML += `<li><p class="card-text">${ingredient}</p></li>`
    })
    // places the directions
    let directionsEl = document.getElementById(`directions${i+seedCount}`)
    recipe.directions.forEach( function(direction) {
        directionsEl.innerHTML += `<li><p class="card-text">${direction}</p></li>`
    })
    i += 1
})

console.log(tagColors['test'])